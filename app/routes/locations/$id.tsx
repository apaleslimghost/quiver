import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useFetcher, useLoaderData } from '@remix-run/react'
import db from '~/lib/db.server'
import url from '~/lib/url'
import { z } from 'zod'
import * as queries from '~/lib/queries'
import { ItemFormSchema } from '../items/new'
import { ItemCard } from '~/components/item/card'

import * as container from '../../components/layout/container.css'
import grid from '../../components/layout/grid.css'
import * as card from '~/components/item/card.css'
import { Button, Form, Input } from '~/components/form/form'
import { Breadcrumbs } from '~/components/breadcrumbs'
import { LocationTitle } from '~/components/location/title'
import { LocationCard } from '~/components/location/card'

const LocationParamsSchema = z.object({
	id: z.coerce.number(),
})

export async function loader({ params }: LoaderArgs) {
	const where = LocationParamsSchema.parse(params)

	const [location, children] = await Promise.all([
		db.location.findFirstOrThrow({
			where,
			include: { items: { include: { item: true } } },
		}),

		db.location.findMany({
			where: {
				parentId: where.id,
			},
		}),
	])

	const ancestors = location.parentId
		? (await queries.ancestors('Location', location.parentId)).reverse()
		: []

	return json({ location, children, ancestors })
}

export default function LocationPage() {
	const { location, children, ancestors } = useLoaderData<typeof loader>()
	const newItem = useFetcher()

	return (
		<div className={container.area.content}>
			<Breadcrumbs type='Location' ancestors={ancestors} />
			<LocationTitle location={location} />

			<div className={grid}>
				<div className={`${card.card} ${card.wide}`}>
					{location.description}
				</div>
				{location.items.map((item) => (
					<ItemCard key={item.itemId} item={item.item} itemLocation={item} />
				))}

				{children.length > 0 &&
					children.map((child) => (
						<LocationCard key={child.id} location={child} />
					))}

				{newItem.submission && (
					<ItemCard
						item={{
							...ItemFormSchema.parse(
								Object.fromEntries(newItem.submission.formData),
							),
							id: NaN,
						}}
					/>
				)}

				<div className={card.card}>
					<Form as={newItem.Form} method='post' action={url('item', 'new')}>
						<Input name='name' type='text' required />
						<Input name='description' type='text' required />
						<input name='locationId' type='hidden' value={location.id} />
						<input type='hidden' name='submitInline' value='true' />
						<Button
							onClick={(event) => {
								event.preventDefault()
								if (event.target instanceof HTMLButtonElement) {
									newItem.submit(event.target.form)
								}
							}}
						>
							Add item
						</Button>
					</Form>
				</div>

				<div className={card.card}>
					<Form method='post' action={url('location', 'new')}>
						<Input name='name' type='text' required />
						<Input name='description' type='text' required />
						<input name='parentId' type='hidden' value={location.id} />
						<Button>Add sublocation</Button>
					</Form>
				</div>
			</div>
		</div>
	)
}
