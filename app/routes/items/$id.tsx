import { json, LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import db from "~/lib/db.server";
import {z} from 'zod'
import * as queries from "~/lib/queries";
import { Heading } from "~/components/typography/heading";
import * as container from "~/components/layout/container.css"
import * as card from "~/components/item/card.css"
import url from "~/lib/url";

const ItemParamsSchema = z.object({
	id: z.coerce.number()
})

export async function loader({ params }: LoaderArgs) {
	const where = ItemParamsSchema.parse(params)
	const item = await db.item.findFirstOrThrow({ where, include: {
		category: true,
		locations: {
			include: {
				location: true,
			}
		}
	}})
	// const ancestors = (await queries.ancestors(item.location.locationId)).reverse()
	return json({item})
}

export default function Item() {
	const {item} = useLoaderData<typeof loader>()

	return <div className={container.area.content}>
		<Heading level={1}>{item.name}</Heading>
		{item.category &&
		<div className=''>
			{item.category.name}
		</div>}

		<div className={card.card}>
			<Heading level={3} className={card.title}>Locations</Heading>

			<ul className={card.content}>
				{item.locations.map(location => (
					<li key={location.locationId}>
						<strong>{location.quantity}</strong> in
						{' '}
						<Link to={url('location', location.location)}>
							{location.location.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	</div>
}
