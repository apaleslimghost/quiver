import { FC, HTMLProps } from "react";

import * as heading from './heading.css'

export const Heading: FC<{level: 1 | 2 | 3 | 4 | 5 | 6, } & HTMLProps<HTMLHeadingElement>> = ({
	level,
	...props
}) => {
	const Tag = `h${level}`

	return <Tag className={heading.levels[level]} {...props}/>
}
