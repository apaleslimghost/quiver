import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import db from "~/db.server";

export async function loader({ params }: LoaderArgs) {
	const item = await db.item.findFirstOrThrow({ where: params })
	return json(item)
}

export default function Item() {
	const item = useLoaderData<typeof loader>()

	return <div>
		<h1>{item.name}</h1>
	</div>
}
