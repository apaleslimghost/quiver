import { json } from '@remix-run/node'
import { useFetcher, useLoaderData } from '@remix-run/react'

import { Button, Form, Input } from '~/components/form/form'
import * as card from '~/components/item/card.css'
import * as container from '~/components/layout/container.css'
import grid from '~/components/layout/grid.css'
import { LocationCard } from '~/components/location/card'
import { Heading } from '~/components/typography/heading'
import db from '~/lib/db.server'
import url from '~/lib/url'

import { LocationFormSchema } from './locations.new'

export async function loader() {
	const locations = await db.location.findMany()

	return json({ locations })
}

export default function Index() {
	const { locations } = useLoaderData<typeof loader>()
	const newLocation = useFetcher()

	return (
		<div className={container.area.content}>
			<Heading level={1}>All locations</Heading>
			<div className={grid}>
				{locations.map((location) => (
					<LocationCard key={location.id} location={location} />
				))}
				{newLocation.formData && (
					<LocationCard
						location={LocationFormSchema.parse(
							Object.fromEntries(newLocation.formData),
						)}
					/>
				)}
				<div className={card.card}>
					<Form
						as={newLocation.Form}
						method='post'
						action={url('location', 'new')}
					>
						<Input name='name' placeholder='name' required />
						<Input name='description' placeholder='description' required />
						<input type='hidden' name='submitInline' value='true' />
						<Button
							onClick={(event) => {
								event.preventDefault()
								if (event.target instanceof HTMLInputElement) {
									newLocation.submit(event.target.form)
								}
							}}
						>
							Create location
						</Button>
					</Form>
				</div>
			</div>
		</div>
	)
}
