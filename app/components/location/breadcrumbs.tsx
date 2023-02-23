import { Location } from "@prisma/client";
import { Link } from "@remix-run/react";
import { FC, HTMLAttributes } from "react";
import url from "~/lib/url";

export const Breadcrumbs: FC<{ ancestors: Location[] } & HTMLAttributes<HTMLUListElement>> = ({ ancestors, ...props }) => {
	if(ancestors.length === 0) return null

	return <ul {...props}>
		{ancestors.map(ancestor => <li key={ancestor.id}>
			<Link to={url('location', ancestor)}>{ancestor.name}</Link>
		</li>)}
	</ul>
}
