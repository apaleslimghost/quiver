import { LoaderArgs, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { z } from 'zod'
import { Heading } from '~/components/typography/heading'
import db from '~/lib/db.server'
import * as container from '~/components/layout/container.css'
import * as card from '~/components/item/card.css'
import url from '~/lib/url'
import * as queries from '~/lib/queries'

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
			<Heading level={1}>{category.name}</Heading>

			<div className={card.card}>
				<Heading level={3} className={card.title}>
					Items
				</Heading>

				<ul className={card.content}>
					{category.items.map((item) => (
						<li key={item.id}>
							<Link to={url('item', item)}>{item.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
