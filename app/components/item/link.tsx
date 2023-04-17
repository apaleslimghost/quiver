import { Item } from "@prisma/client";
import { Link, LinkProps } from "@remix-run/react";
import { FC, HTMLProps, ReactNode, RefAttributes } from "react";
import url from "~/lib/url";

export const ItemLink: FC<{item: Partial<Item>, children?: ReactNode} & Omit<LinkProps, 'to'>> = ({item, children, ...props}) =>  (
	!Number.isNaN(item.id) ? <Link to={url('item', item)} {...props}>{children ?? item.name}</Link> : <span {...props}>{children ?? item.name}</span>
)
