import { Item } from "@prisma/client";
import { FC } from "react";
import { Heading } from "../typography/heading";
import { ItemLink } from "./link";

import * as card from './card.css'

export const ItemCard: FC<{item: Item}> = ({ item }) => <ItemLink item={item}>
	<div className={card.card}>
		<Heading level={3} className={card.title}>
			{item.name}
		</Heading>
		<div className={card.content}>{item.description}</div>
	</div>
</ItemLink>
