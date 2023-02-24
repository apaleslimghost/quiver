import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import db from "~/lib/db.server";
import {z} from 'zod'
import * as queries from "~/lib/queries";

const ItemParamsSchema = z.object({
	id: z.coerce.number()
})

export async function loader({ params }: LoaderArgs) {
	const where = ItemParamsSchema.parse(params)
	const item = await db.item.findFirstOrThrow({ where })
	const ancestors = (await queries.ancestors(item.locationId)).reverse()
	return json({item, ancestors})
}

export default function Item() {
	const {item} = useLoaderData<typeof loader>()

	return <>
		<h1>{item.name}</h1>
	</>
}
