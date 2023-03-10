import { ActionArgs, json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { z } from "zod";
import dbServer from "~/lib/db.server";
import url from "~/lib/url";

export const LocationFormSchema = z.object({
	name: z.string(),
	description: z.string(),
	parentId: z.coerce.number().optional(),
	submitInline: z.coerce.boolean().default(false)
})

export async function action({request}: ActionArgs) {
	const form = Object.fromEntries(await request.formData())

	const { parentId, submitInline, ...data } = LocationFormSchema.parse(form)

	const location = await dbServer.location.create({
		data: {
			...data,
			parent: {
				connect: {
					id: parentId
				}
			}
		}
	})

	if(submitInline) {
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

	return <Form method="post">
		<input name="name" placeholder="name" required />
		<input name="description" placeholder="description" required />
		<select name="parentId">
			<option></option>
			{locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
		</select>

		<input type="submit" />
	</Form>
}
