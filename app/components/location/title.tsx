import type { Location } from '@prisma/client'
import type { FC, HTMLProps } from 'react'

import { AztecCode } from '../aztec-code'
import { Heading, type HeadingLevel } from '../typography/heading'

import { title, aztec } from './title.css'

export const LocationTitle: FC<
	{ location: Partial<Location>; level?: HeadingLevel } & Omit<
		HTMLProps<HTMLHeadingElement>,
		'id'
	>
> = ({ location, level, className, ...props }) => (
	<Heading
		level={level ?? 1}
		className={`${title} ${className ?? ''}`}
		{...props}
	>
		{location.id && (
			<AztecCode className={aztec} data={location.id.toString()} />
		)}
		{location.name}
	</Heading>
)
