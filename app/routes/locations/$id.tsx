import { json, LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import db from "~/db.server";
import { coerce } from "~/validate";
import url from "~/url";
import generate2DBarcode from "~/barcode.server";

export async function loader({ params }: LoaderArgs) {
	const where = coerce({ id: 'number' }, params)
	const location = await db.location.findFirstOrThrow({
		where,
		include: {
			parent: true,
			children: true
		}
	})

	const barcode = (await generate2DBarcode({
		bcid: 'aztecrune',
		text: location.id.toString()
	})).toString('base64')

	return json({location, barcode})
}

export default function Location() {
	const {location, barcode} = useLoaderData<typeof loader>()

	return <div>
		{location.parent && <h2><Link to={url('location', location.parent)}>{location.parent.name}</Link></h2>}
		<h1>{location.name}</h1>
		{location.children.length > 0 && <ul>{location.children.map(child => <li key={child.id}><Link to={url('location', child)}>{child.name}</Link></li>)}</ul>}

		<img src={`data:image/png;base64,${barcode}`} alt="" />
	</div>
}
