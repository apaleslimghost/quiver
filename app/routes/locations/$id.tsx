import { json, LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import db from "~/db.server";
import { coerce } from "~/validate";
import url from "~/url";
import generate2DBarcode from "~/barcode.server";
import {Location} from '@prisma/client'

export async function loader({ params }: LoaderArgs) {
	const where = coerce({ id: 'number' }, params)
	const location = await db.location.findFirstOrThrow({
		where,
		include: {
			parent: true
		}
	})

	const descendents = await db.$queryRaw<Location[]>`
		WITH RECURSIVE descendents AS (
			SELECT id, name, "parentId"
			FROM "Location"
			WHERE "parentId" = ${location.id}
			UNION ALL
			SELECT l.id, l.name, l."parentId"
			FROM "Location" l
			JOIN descendents cs ON cs.id = l."parentId"
		)
		SELECT * FROM descendents;
	`

	const barcode = (await generate2DBarcode({
		bcid: 'azteccodecompact',
		text: url('location', location)
	})).toString('base64')

	return json({location, barcode, descendents})
}

export default function LocationPage() {
	const {location, barcode, descendents} = useLoaderData<typeof loader>()

	return <div>
		{location.parent && <h2><Link to={url('location', location.parent)}>{location.parent.name}</Link></h2>}
		<h1>{location.name}</h1>
		{descendents.length > 0 && <ul>{descendents.map(child => <li key={child.id}><Link to={url('location', child)}>{child.name}</Link></li>)}</ul>}

		<img src={`data:image/png;base64,${barcode}`} alt="" />
	</div>
}
