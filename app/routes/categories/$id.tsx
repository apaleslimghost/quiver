import { LoaderArgs, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { z } from 'zod'
import { Heading } from '~/components/typography/heading'
import db from '~/lib/db.server'
import * as container from '~/components/layout/container.css'
import * as card from '~/components/item/card.css'
import url from '~/lib/url'
import * as queries from '~/lib/queries'
import { Breadcrumbs } from '~/components/breadcrumbs'
import grid from '~/components/layout/grid.css'
import { ItemCard } from '~/components/item/card'

const CategoryParamsSchema = z.object({
	id: z.coerce.number(),
})

export async function loader({ params }: LoaderArgs) {
	const where = CategoryParamsSchema.parse(params)
	const category = await db.category.findFirstOrThrow({
		where,
		include: {
			items: true,
		},
	})

	const ancestors = category.parentId
		? await queries.ancestors('Category', category.parentId)
		: []

	return json({ category, ancestors })
}

export default function CategoryPage() {
	const { category, ancestors } = useLoaderData<typeof loader>()

	return (
		<div className={container.area.content}>
			<Breadcrumbs type='Category' ancestors={ancestors} />
			<Heading level={1}>{category.name}</Heading>

			<div className={grid}>
				{category.items.map((item) => (
					<ItemCard key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}
