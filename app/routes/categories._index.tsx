import { json } from '@remix-run/node'
import { Form as RemixForm, Link, useLoaderData } from '@remix-run/react'
import dbServer from '~/lib/db.server'
import * as container from '~/components/layout/container.css'
import { Heading } from '~/components/typography/heading'
import gridCss from '~/components/layout/grid.css'
import * as card from '~/components/item/card.css'
import url from '~/lib/url'
import { unstyled } from '~/components/typography/link.css'
import { Button, Form, Input } from '~/components/form/form'

export async function loader() {
	const categories = await dbServer.category.findMany()

	return json({ categories })
}

export default function CategoriesPage() {
	const { categories } = useLoaderData<typeof loader>()

	return (
		<div className={container.area.content}>
			<Heading level={1}>Categories</Heading>

			<div className={gridCss}>
				{categories.map((category) => (
					<Link
						to={url('category', category)}
						className={unstyled}
						key={category.id}
					>
						<div className={card.card}>
							<Heading level={3} className={card.title}>
								{category.name}
							</Heading>
						</div>
					</Link>
				))}

				<div className={card.card}>
					<Form as={RemixForm} method='post' action={url('category', 'new')}>
						<Input name='name' placeholder='name' required />
						<Button type='submit'>Create category</Button>
					</Form>
				</div>
			</div>
		</div>
	)
}
