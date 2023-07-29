import type { FC, HTMLProps } from 'react'

import * as heading from './heading.css'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export const Heading: FC<
	{ level: HeadingLevel } & HTMLProps<HTMLHeadingElement>
> = ({ level, className, ...props }) => {
	const Tag = `h${level}` as const

	return (
		<Tag className={[heading.levels[level], className].join(' ')} {...props} />
	)
}
