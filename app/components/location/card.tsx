import type { ItemLocations, Location } from '@prisma/client'
import { Link } from '@remix-run/react'
import type { FC, PropsWithChildren } from 'react'

import { Breadcrumbs } from '../breadcrumbs'
import * as card from '../item/card.css'
import * as link from '../typography/link.css'
import url from '~/lib/url'

import { LocationTitle } from './title'

export const LocationCard: FC<
	PropsWithChildren<{
		location: Partial<Location> &
			Partial<ItemLocations> & { ancestors?: Partial<Location>[] }
	}>
> = ({ location, children }) => {
	const Wrapper = Number.isNaN(location.id) ? 'div' : Link

	return (
		<Wrapper to={url('location', location)} className={link.unstyled}>
			<div className={card.card} data-wtf='hello?'>
				{location.ancestors && (
					<Breadcrumbs type='Location' ancestors={location.ancestors} />
				)}
				<LocationTitle level={3} className={card.title} location={location} />

				{!Number.isNaN(location.quantity) && (
					<div className={card.number}>{location.quantity}</div>
				)}
			</div>
		</Wrapper>
	)
}
