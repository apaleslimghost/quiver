import { Location } from '@prisma/client'
import { Link } from '@remix-run/react'
import { FC, HTMLAttributes } from 'react'
import url from '~/lib/url'

export const Breadcrumbs: FC<
	{ ancestors: Location[] } & HTMLAttributes<HTMLUListElement>
> = ({ ancestors, ...props }) => {
	return (
		<ul {...props}>
			<li>
				<Link to='/locations'>Locations</Link>
			</li>
			{ancestors.map((ancestor) => (
				<li key={ancestor.id}>
					<Link to={url('location', ancestor)}>{ancestor.name}</Link>
				</li>
			))}
		</ul>
	)
}
