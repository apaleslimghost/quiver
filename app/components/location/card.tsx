import { Item, Location } from '@prisma/client'
import { Link } from '@remix-run/react'
import pluralize from 'pluralize'
import { FC } from 'react'
import url from '~/lib/url'

import * as card from '../item/card.css'
import * as link from '../typography/link.css'
import { Heading } from '../typography/heading'

export const LocationCard: FC<{ location: Partial<Location> }> = ({
	location,
}) => {
	const Wrapper = Number.isNaN(location.id) ? 'div' : Link

	return (
		<Wrapper to={url('location', location)} className={link.unstyled}>
			<div className={card.card}>
				<Heading level={3} className={card.title}>
					{location.name}
				</Heading>
			</div>
		</Wrapper>
	)
}
