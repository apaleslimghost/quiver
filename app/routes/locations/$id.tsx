import { json, LoaderArgs, LoaderFunction, TypedResponse } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import db from "~/lib/db.server";
import url from "~/lib/url";
import generate2DBarcode from "~/lib/barcode.server";
import {Location} from '@prisma/client'
import {z} from 'zod'
import { Breadcrumbs } from "~/components/location/breadcrumbs";
import * as queries from "~/lib/queries";

const LocationParamsSchema = z.object({
	id: z.coerce.number()
})

export async function loader({ params }: LoaderArgs) {
	const where = LocationParamsSchema.parse(params)

	const [location, descendents, barcode] = await Promise.all([
		db.location.findFirstOrThrow({ where, include: { items: true } }),

		db.$queryRaw<Location[]>`
			WITH RECURSIVE descendents AS (
				SELECT id, name, "parentId"
				FROM "Location"
				WHERE "parentId" = ${where.id}
				UNION ALL
				SELECT l.id, l.name, l."parentId"
				FROM "Location" l
				JOIN descendents cs ON cs.id = l."parentId"
			)
			SELECT * FROM descendents;
		`,

		generate2DBarcode({
			bcid: 'azteccodecompact',
			text: url('location', where)
		}).then(buffer => buffer.toString('base64')),
	])

	const ancestors = location.parentId ? (await queries.ancestors(location.parentId)).reverse() : []

	return json({location, barcode, descendents, ancestors})
}

export default function LocationPage() {
	const {location, barcode, descendents, ancestors} = useLoaderData<typeof loader>()

	return <div>
		<Breadcrumbs ancestors={ancestors} />
		<h1>{location.name}</h1>
		{descendents.length > 0 && <ul>{descendents.map(descendent => <li key={descendent.id}><Link to={url('location', descendent)}>{descendent.name}</Link></li>)}</ul>}

		<ul>
			{ location.items.map(item => <li key={item.id}>
				<Link to={url('item', item)}>{item.name}</Link>
			</li>) }
		</ul>

		<img src={`data:image/png;base64,${barcode}`} alt="" />
	</div>
}
