import type { Location } from '@prisma/client'
import type { FC, HTMLProps } from 'react'
import { Heading } from '../typography/heading'
import { AztecCode } from '../aztec-code'
import { title, aztec } from './title.css'

export const LocationTitle: FC<
	{ location: Partial<Location> } & Omit<HTMLProps<HTMLHeadingElement>, 'id'>
> = ({ location, ...props }) => (
	<Heading level={1} className={title} {...props}>
		{location.id && (
			<AztecCode className={aztec} data={location.id.toString()} />
		)}
		{location.name}
	</Heading>
)
