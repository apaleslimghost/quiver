import type { Item } from '@prisma/client'
import type { LinkProps } from '@remix-run/react'
import { Link } from '@remix-run/react'
import type { FC, ReactNode } from 'react'

import url from '~/lib/url'

export const ItemLink: FC<
	{ item: Partial<Item>; children?: ReactNode } & Omit<LinkProps, 'to'>
> = ({ item, children, ...props }) =>
	!Number.isNaN(item.id) ? (
		<Link to={url('item', item)} {...props}>
			{children ?? item.name}
		</Link>
	) : (
		<span {...props}>{children ?? item.name}</span>
	)
