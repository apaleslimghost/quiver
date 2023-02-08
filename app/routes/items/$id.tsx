import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import db from "~/db.server";
import { coerce } from "~/validate";

export async function loader({ params }: LoaderArgs) {
	const where = coerce({ id: 'number' }, params)
	const item = await db.item.findFirstOrThrow({ where })
	return json(item)
}

export default function Item() {
	const item = useLoaderData<typeof loader>()

	return <div>
		<h1>{item.name}</h1>
	</div>
}
