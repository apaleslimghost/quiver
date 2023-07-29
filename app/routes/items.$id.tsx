import { json } from '@remix-run/node'
import type { V2_MetaFunction, LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { z } from 'zod'

import { Breadcrumbs } from '~/components/breadcrumbs'
import * as card from '~/components/item/card.css'
import * as container from '~/components/layout/container.css'
import grid from '~/components/layout/grid.css'
import { LocationCard } from '~/components/location/card'
import { Heading } from '~/components/typography/heading'
import db from '~/lib/db.server'
import * as queries from '~/lib/queries'
import url from '~/lib/url'

const ItemParamsSchema = z.object({
	id: z.coerce.number(),
})

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => [
	{ title: `Quiver ➳ ${data?.item.name}` },
]

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
				? (
						await queries.ancestors('Location', location.location.parentId)
				  ).reverse()
				: [],
		})),
	)

	const categoryAncestors = item.category?.parentId
		? (await queries.ancestors('Category', item.category.parentId)).reverse()
		: []

	return json({ item, locations, categoryAncestors })
}

export default function Item() {
	const { item, locations, categoryAncestors } = useLoaderData<typeof loader>()

	return (
		<div className={container.area.content}>
			{item.category && (
				<div className=''>
					<Breadcrumbs type='Category' ancestors={categoryAncestors}>
						<Link to={url('category', item.category)}>
							{item.category.name}
						</Link>
					</Breadcrumbs>
				</div>
			)}
			<Heading level={1}>{item.name}</Heading>

			<div className={grid}>
				<div className={`${card.card} ${card.wide}`}>{item.description}</div>

				{locations.map((location) => (
					<LocationCard location={location} key={location.id} />
				))}
			</div>
		</div>
	)
}
