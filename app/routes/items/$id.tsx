import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import db from "~/lib/db.server";
import {z} from 'zod'
import * as queries from "~/lib/queries";
import { Breadcrumbs } from "~/components/location/breadcrumbs";

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
	const {item, ancestors} = useLoaderData<typeof loader>()

	return <div>
		<Breadcrumbs ancestors={ancestors} />
		<h1>{item.name}</h1>
	</div>
}
