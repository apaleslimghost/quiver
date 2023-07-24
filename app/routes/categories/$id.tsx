import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { z } from 'zod'
import { Heading } from '~/components/typography/heading'
import db from '~/lib/db.server'
import * as container from '~/components/layout/container.css'

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

	return json({ category })
}

export default function CategoryPage() {
	const { category } = useLoaderData<typeof loader>()

	return (
		<div className={container.area.content}>
			<Heading level={1}>{category.name}</Heading>
		</div>
	)
}
