import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import db from "~/db.server";
import { coerce } from "~/validate";
import url from "~/url";
import generate2DBarcode from "~/barcode.server";

export async function loader({ params }: LoaderArgs) {
	const where = coerce({ id: 'number' }, params)
	const location = await db.location.findFirstOrThrow({
		where
	})

	const barcode = (await generate2DBarcode({
		bcid: 'datamatrix',
		text: url('location', location)
	})).toString('base64')

	return json({location, barcode})
}

export default function Location() {
	const {location, barcode} = useLoaderData<typeof loader>()

	return <div>
		<h1>{location.name}</h1>
		<img src={`data:image/png;base64,${barcode}`} alt="" />
	</div>
}
