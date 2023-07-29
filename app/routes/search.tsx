import { type ActionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { z } from 'zod'
import { ItemCard } from '~/components/item/card'
import * as container from '~/components/layout/container.css'
import gridCss from '~/components/layout/grid.css'
import { Heading } from '~/components/typography/heading'
import dbServer from '~/lib/db.server'

const SearchParamsSchema = z.object({
	q: z.string().optional(),
})

export async function loader({ request }: ActionArgs) {
	const url = new URL(request.url)
	const { q } = SearchParamsSchema.parse(Object.fromEntries(url.searchParams))

	const results = q
		? await dbServer.item.findMany({
				where: {
					OR: [{ name: { search: q } }, { description: { search: q } }],
				},
				orderBy: {
					_relevance: {
						fields: ['name', 'description'],
						search: q,
						sort: 'desc',
					},
				},
		  })
		: []

	return json({ results, q })
}

export default function SearchPage() {
	const { results, q } = useLoaderData<typeof loader>() ?? {}

	return (
		<div className={container.area.content}>
			<Heading level={1}>
				Results for <em>&ldquo;{q}&rdquo;</em>
			</Heading>

			<div className={gridCss}>
				{results.map((item) => (
					<ItemCard item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}
