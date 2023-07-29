import type { Item, ItemLocations } from '@prisma/client'
import type { FC } from 'react'

import { Heading } from '../typography/heading'
import * as link from '../typography/link.css'

import * as card from './card.css'
import { ItemLink } from './link'

export const ItemCard: FC<{
	item: Partial<Item>
	itemLocation?: Partial<ItemLocations>
}> = ({ item, itemLocation }) => (
	<ItemLink item={item} className={link.unstyled}>
		<div className={card.card}>
			<Heading level={3} className={card.title}>
				{item.name}
			</Heading>
			<div className={card.content}>{item.description}</div>

			{itemLocation && !Number.isNaN(itemLocation.quantity) && (
				<div className={card.number}>{itemLocation.quantity}</div>
			)}
		</div>
	</ItemLink>
)
