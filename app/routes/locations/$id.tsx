import { json, LoaderArgs, LoaderFunction, TypedResponse } from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import db from "~/lib/db.server";
import url from "~/lib/url";
import {z} from 'zod'
import * as queries from "~/lib/queries";
import { ItemLink } from "~/components/item/link";
import { ItemFormSchema } from "../items/new";
import BwipJs from "bwip-js";
import { ItemCard } from "~/components/item/card";

import * as container from '../../components/layout/container.css'
import grid from '../../components/layout/grid.css'
import { Heading } from "~/components/typography/heading";
import * as card from "~/components/item/card.css";

const LocationParamsSchema = z.object({
	id: z.coerce.number()
})

export async function loader({ params }: LoaderArgs) {
	const where = LocationParamsSchema.parse(params)

	const [location, descendents, barcode] = await Promise.all([
		db.location.findFirstOrThrow({ where, include: { items: true } }),

		queries.descendents(where.id),

		BwipJs.toBuffer({
			bcid: 'azteccodecompact',
			text: where.id.toString()
		}).then(buffer => buffer.toString('base64')),
	])

	const ancestors = location.parentId ? (await queries.ancestors(location.parentId)).reverse() : []

	return json({location, barcode, descendents, ancestors})
}

export default function LocationPage() {
	const {location, barcode, descendents} = useLoaderData<typeof loader>()
	const newItem = useFetcher()

	return <div className={container.area.content}>
		<Heading level={1}>
			<img className='location__barcode' src={`data:image/png;base64,${barcode}`} alt="" />
			{location.name}
		</Heading>
		{descendents.length > 0 && <ul>{descendents.map(descendent => <li key={descendent.id}><Link to={url('location', descendent)}>{descendent.name}</Link></li>)}</ul>}

		<div className={grid}>
			{ location.items.map(item => <ItemCard key={item.id} item={item} />) }

			{newItem.submission && <ItemCard item={{
				...ItemFormSchema.parse(Object.fromEntries(newItem.submission.formData)),
				id: NaN
			}} />}

			<div className={card.card}>
				<newItem.Form method='post' action={url('item', 'new')}>
					<input name="name" type="text" required />
					<input name="description" type="text" required />
					<input name="locationId" type="hidden" value={location.id} />
					<input type="hidden" name="submitInline" value="true" />
					<input type="submit" onClick={event => {
					event.preventDefault()
					if(event.target instanceof HTMLInputElement) {
						newItem.submit(event.target.form)
					}
					}} />
				</newItem.Form>
			</div>
		</div>
	</div>
}
