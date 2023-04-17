import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { LocationCard } from "~/components/location/card";
import { Heading } from "~/components/typography/heading";
import dbServer from "~/lib/db.server";

import * as container from '../components/layout/container.css'
import * as card from '../components/item/card.css'
import * as link from '../components/typography/link.css'
import grid from '../components/layout/grid.css'
import pluralize from "pluralize";

export async function loader() {
	const locations = await dbServer.location.count()
	const items = await dbServer.item.count()

	return json({ locations, items })
}

export default function Index() {
	const { locations, items } = useLoaderData<typeof loader>()

	return <div className={container.area.content}>
		<Heading level={1}>
			Quiver
		</Heading>

		<div className={grid}>
			<Link to='/locations' className={link.unstyled}>
				<div className={card.card}>
					<Heading level={2} className={card.title}>
						{ locations }
					</Heading>
					<Heading level={3} className={card.content}>
						{ pluralize('location', locations) }
					</Heading>
				</div>
			</Link>

			<Link to='/items' className={link.unstyled}>
				<div className={card.card}>
					<Heading level={2} className={card.title}>
						{ items }
					</Heading>
					<Heading level={3} className={card.content}>
						{ pluralize('item', items) }
					</Heading>
				</div>
			</Link>
		</div>
	</div>
}
