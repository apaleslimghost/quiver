import { json, type LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import db from '~/lib/db.server'
import { z } from 'zod'
import * as queries from '~/lib/queries'
import { Heading } from '~/components/typography/heading'
import * as container from '~/components/layout/container.css'
import url from '~/lib/url'
import { Breadcrumbs } from '~/components/breadcrumbs'
import { LocationCard } from '~/components/location/card'
import grid from '~/components/layout/grid.css'
import * as card from '~/components/item/card.css'

const ItemParamsSchema = z.object({
	id: z.coerce.number(),
})

export async function loader({ params }: LoaderArgs) {
	const where = ItemParamsSchema.parse(params)
	const item = await db.item.findFirstOrThrow({
		where,
		include: {
			category: true,
			locations: {
				include: {
					location: true,
				},
			},
		},
	})

	const locations = await Promise.all(
		item.locations.map(async (location) => ({
			...location,
			...location.location,
			ancestors: location.location.parentId
				? await queries.ancestors('Location', location.location.parentId)
				: [],
		})),
	)

	const categoryAncestors = item.category?.parentId
		? await queries.ancestors('Category', item.category.parentId)
		: []

	return json({ item, locations, categoryAncestors })
}

export default function Item() {
	const { item, locations, categoryAncestors } = useLoaderData<typeof loader>()

	return (
		<div className={container.area.content}>
			<Heading level={1}>{item.name}</Heading>
			{item.category && (
				<div className=''>
					<Breadcrumbs
						type='Category'
						ancestors={categoryAncestors}
						noLastArrow
					>
						<Link to={url('category', item.category)}>
							{item.category.name}
						</Link>
					</Breadcrumbs>
				</div>
			)}

			<div className={grid}>
				<div className={`${card.card} ${card.wide}`}>{item.description}</div>
				{locations.map((location) => (
					<LocationCard location={location} key={location.id}>
						{location.quantity}
					</LocationCard>
				))}
			</div>
		</div>
	)
}
