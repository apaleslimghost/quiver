import { ActionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { LocationCreateOneSchema } from "prisma/generated/schemas";
import dbServer from "~/db.server";
import url from "~/url";

export async function action({request}: ActionArgs) {
	const form = await request.formData()
	const data = LocationCreateOneSchema.parse({ data: Object.fromEntries(form) })
	const location = await dbServer.location.create(data)

	return redirect(url('location', location))
}

export default function New() {
	return <Form method="post">
		<input name="name" placeholder="name" required />
		<input name="description" placeholder="description" required />
		<input type="submit" />
	</Form>
}
