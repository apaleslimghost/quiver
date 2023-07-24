import { json } from '@remix-run/node'
import { useFetcher, useLoaderData } from '@remix-run/react'
import { ItemLink } from '~/components/item/link'
import { Heading } from '~/components/typography/heading'
import db from '~/lib/db.server'
import url from '~/lib/url'
import { ItemFormSchema } from './new'
import * as container from '../../components/layout/container.css'
import { Button, Form, Input, Select } from '~/components/form/form'

export async function loader() {
	const [items, locations] = await Promise.all([
		db.item.findMany(),
		db.location.findMany(),
	])

	return json({ items, locations })
}

export default function Index() {
	const { items, locations } = useLoaderData<typeof loader>()
	const newItem = useFetcher()

	return (
		<>
			<div className={container.area.content}>
				<Heading level={1}>All items</Heading>
				<ul>
					{items.map((item) => (
						<li key={item.id}>
							<ItemLink item={item} />
						</li>
					))}
					{newItem.submission && (
						<li>
							<ItemLink
								item={ItemFormSchema.parse(
									Object.fromEntries(newItem.submission.formData),
								)}
							/>
						</li>
					)}
					<li>
						<Form as={newItem.Form} method='post' action={url('item', 'new')}>
							<Input name='name' placeholder='name' required />
							<Input name='description' placeholder='description' required />
							<Select name='locationId'>
								<option disabled selected>
									Location...
								</option>
								<>
									{locations.map((location) => (
										<option key={location.id} value={location.id}>
											{location.name}
										</option>
									))}
								</>
							</Select>
							<input type='hidden' name='submitInline' value='true' />
							<Button
								onClick={(event) => {
									event.preventDefault()
									if (event.target instanceof HTMLButtonElement) {
										newItem.submit(event.target.form)
									}
								}}
							>
								Create item
							</Button>
						</Form>
					</li>
				</ul>
			</div>
		</>
	)
}
