import { json, LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import db from '~/lib/db.server'
import { z } from 'zod'
import * as queries from '~/lib/queries'
import { Heading } from '~/components/typography/heading'
import * as container from '~/components/layout/container.css'
import * as card from '~/components/item/card.css'
import url from '~/lib/url'
import { Breadcrumbs } from '~/components/breadcrumbs'

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

	return json({ item, locations })
}

export default function Item() {
	const { item, locations } = useLoaderData<typeof loader>()

	return (
		<div className={container.area.content}>
			<Heading level={1}>{item.name}</Heading>
			{item.category && (
				<div className=''>
					<Link to={url('category', item.category)}>{item.category.name}</Link>
				</div>
			)}

			<div className={card.card}>
				<Heading level={3} className={card.title}>
					Locations
				</Heading>

				<ul className={card.content}>
					{locations.map((location) => (
						<li key={location.id}>
							<strong>{location.quantity}</strong> in{' '}
							<Breadcrumbs type='Location' ancestors={location.ancestors} />
							<Link to={url('location', location)}>{location.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
