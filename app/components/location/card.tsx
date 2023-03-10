import { Item, Location } from "@prisma/client";
import { Link } from "@remix-run/react";
import pluralize from "pluralize";
import { FC } from "react";
import url from "~/lib/url";

export const LocationCard: FC<{location: Partial<Location>, items?: Item[]}> = ({ location, items = [] }) => {
	const Wrapper = Number.isNaN(location.id) ? 'div' : Link

	return <Wrapper to={url('location', location)}>
		<h2>{location.name}</h2>

		{pluralize('item', items.length, true)}
	</Wrapper>
}
