import type { Prisma } from '@prisma/client'
import { Link } from '@remix-run/react'
import pluralize from 'pluralize'
import { Children, type HTMLAttributes } from 'react'

import type { ParentModels } from '~/lib/queries'
import url from '~/lib/url'

import { breadcrumb, breadcrumbs } from './breadcrumbs.css'

type BreadcrumbProps<T extends keyof ParentModels> = {
	type: T
	ancestors: Partial<ParentModels[T]>[]
	noLastArrow?: true
} & HTMLAttributes<HTMLUListElement>

export const Breadcrumbs = <T extends keyof ParentModels>({
	type,
	ancestors,
	children,
	noLastArrow,
	...props
}: BreadcrumbProps<T>) => {
	return (
		<ul className={breadcrumbs} {...props}>
			<li className={breadcrumb[noLastArrow ? 'noLastArrow' : 'default']}>
				<Link to={'/' + pluralize(type).toLowerCase()}>{pluralize(type)}</Link>
			</li>
			{ancestors.map((ancestor) => (
				<li
					className={breadcrumb[noLastArrow ? 'noLastArrow' : 'default']}
					key={ancestor.id}
				>
					<Link
						to={url(
							type.toLowerCase() as Lowercase<Prisma.ModelName>,
							ancestor,
						)}
					>
						{ancestor.name}
					</Link>
				</li>
			))}
			{Children.map(children, (child) => (
				<li className={breadcrumb[noLastArrow ? 'noLastArrow' : 'default']}>
					{child}
				</li>
			))}
		</ul>
	)
}
