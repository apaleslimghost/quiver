import { Item } from "@prisma/client";
import { FC } from "react";
import { Card } from "react-daisyui";
import { ItemLink } from "./link";

export const ItemCard: FC<{item: Item}> = ({ item }) => <ItemLink item={item}>
	<Card>
		<Card.Body>
			<Card.Title>
				{item.name}
			</Card.Title>
		</Card.Body>
	</Card>
</ItemLink>
