import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Link, useFetcher, useLoaderData } from '@remix-run/react'
import db from '~/lib/db.server'
import url from '~/lib/url'
import { z } from 'zod'
import * as queries from '~/lib/queries'
import { ItemFormSchema } from '../items/new'
import BwipJs from 'bwip-js'
import { ItemCard } from '~/components/item/card'

import * as container from '../../components/layout/container.css'
import grid from '../../components/layout/grid.css'
import { Heading } from '~/components/typography/heading'
import * as card from '~/components/item/card.css'
import { Button, Form, Input } from '~/components/form/form'
import { Breadcrumbs } from '~/components/breadcrumbs'
import { AztecCode } from '~/components/aztec-code'
import { LocationTitle } from '~/components/location/title'

const LocationParamsSchema = z.object({
	id: z.coerce.number(),
})

export async function loader({ params }: LoaderArgs) {
	const where = LocationParamsSchema.parse(params)

	const [location, descendents] = await Promise.all([
		db.location.findFirstOrThrow({
			where,
			include: { items: { include: { item: true } } },
		}),

		queries.descendents('Location', where.id),
	])

	const ancestors = location.parentId
		? (await queries.ancestors('Location', location.parentId)).reverse()
		: []

	return json({ location, descendents, ancestors })
}

export default function LocationPage() {
	const { location, descendents, ancestors } = useLoaderData<typeof loader>()
	const newItem = useFetcher()

	return (
		<div className={container.area.content}>
			<Breadcrumbs type='Location' ancestors={ancestors} />
			<LocationTitle location={location} />
			{descendents.length > 0 && (
				<ul>
					{descendents.map((descendent) => (
						<li key={descendent.id}>
							<Link to={url('location', descendent)}>{descendent.name}</Link>
						</li>
					))}
				</ul>
			)}

			<div className={grid}>
				{location.items.map((item) => (
					<ItemCard key={item.itemId} item={item.item} />
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
