import type { Item } from '@prisma/client'
import type { FC } from 'react'
import { Heading } from '../typography/heading'
import { ItemLink } from './link'

import * as card from './card.css'
import * as link from '../typography/link.css'

export const ItemCard: FC<{ item: Partial<Item> }> = ({ item }) => (
	<ItemLink item={item} className={link.unstyled}>
		<div className={card.card}>
			<Heading level={3} className={card.title}>
				{item.name}
			</Heading>
			<div className={card.content}>{item.description}</div>
		</div>
	</ItemLink>
)
