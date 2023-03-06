import { Item } from "@prisma/client";
import { Link } from "@remix-run/react";
import { FC, ReactNode } from "react";
import url from "~/lib/url";

export const ItemLink: FC<{item: Item, children?: ReactNode}> = ({item, children}) =>  (
	!Number.isNaN(item.id) ? <Link to={url('item', item)}>{children ?? item.name}</Link> : <>{children ?? item.name}</>
)
