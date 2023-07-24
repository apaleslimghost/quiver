import type { ActionArgs } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { Form as RemixForm, useLoaderData } from '@remix-run/react'
import { z } from 'zod'
import { Button, Form, Input, Select } from '~/components/form/form'
import dbServer from '~/lib/db.server'
import url from '~/lib/url'

export const LocationFormSchema = z.object({
	name: z.string(),
	description: z.string(),
	parentId: z.coerce.number().optional(),
	submitInline: z.coerce.boolean().default(false),
})

export async function action({ request }: ActionArgs) {
	const form = Object.fromEntries(await request.formData())

	const { parentId, submitInline, ...data } = LocationFormSchema.parse(form)

	const location = await dbServer.location.create({
		data: {
			...data,
			...(parentId
				? {
						parent: {
							connect: {
								id: parentId,
							},
						},
				  }
				: {}),
		},
	})

	if (submitInline) {
		return null
	} else {
		return redirect(url('location', location))
	}
}

export async function loader() {
	const locations = await dbServer.location.findMany()
	return json(locations)
}

export default function New() {
	const locations = useLoaderData<typeof loader>()

	return (
		<Form as={RemixForm} method='post'>
			<Input name='name' placeholder='name' required />
			<Input name='description' placeholder='description' required />
			<Select name='parentId'>
				<option></option>
				{locations.map((location) => (
					<option key={location.id} value={location.id}>
						{location.name}
					</option>
				))}
			</Select>

			<Button>Create location</Button>
		</Form>
	)
}
