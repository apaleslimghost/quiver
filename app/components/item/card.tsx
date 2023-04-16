import { Item } from "@prisma/client";
import { FC } from "react";
import { ItemLink } from "./link";

export const ItemCard: FC<{item: Item}> = ({ item }) => <ItemLink item={item}>
	<div>
		<h3>
			{item.name}
		</h3>
	</div>
</ItemLink>
