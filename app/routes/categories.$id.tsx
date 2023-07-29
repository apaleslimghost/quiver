import { type LoaderArgs, json } from '@remix-run/node'
import { Link, useLoaderData, Form as RemixForm } from '@remix-run/react'
import { z } from 'zod'

import { Breadcrumbs } from '~/components/breadcrumbs'
import { Button, Form, Input } from '~/components/form/form'
import { ItemCard } from '~/components/item/card'
import * as card from '~/components/item/card.css'
import * as container from '~/components/layout/container.css'
import grid from '~/components/layout/grid.css'
import { Heading } from '~/components/typography/heading'
import { unstyled } from '~/components/typography/link.css'
import db from '~/lib/db.server'
import * as queries from '~/lib/queries'
import url from '~/lib/url'

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

	const children = await db.category.findMany({
		where: {
			parentId: where.id,
		},
	})

	return json({ category, ancestors, children })
}

export default function CategoryPage() {
	const { category, ancestors, children } = useLoaderData<typeof loader>()

	return (
		<div className={container.area.content}>
			<Breadcrumbs type='Category' ancestors={ancestors} />
			<Heading level={1}>{category.name}</Heading>

			<div className={grid}>
				{category.items.map((item) => (
					<ItemCard key={item.id} item={item} />
				))}

				{children.map((child) => (
					<Link key={child.id} to={url('category', child)} className={unstyled}>
						<div className={card.card}>
							<Heading level={3} className={card.title}>
								{child.name}
							</Heading>
						</div>
					</Link>
				))}

				<div className={card.card}>
					<Form as={RemixForm} method='post' action={url('category', 'new')}>
						<Input name='name' placeholder='name' required />
						<input name='parentId' type='hidden' value={category.id} />
						<Button type='submit'>Add subcategory</Button>
					</Form>
				</div>
			</div>
		</div>
	)
}
