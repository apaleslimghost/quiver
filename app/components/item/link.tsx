import { Item } from "@prisma/client";
import { Link } from "@remix-run/react";
import url from "~/lib/url";

export const ItemLink = (item: Item) =>  (
	!Number.isNaN(item.id) ? <Link to={url('item', item)}>{item.name}</Link> : <>{item.name}</>
)
