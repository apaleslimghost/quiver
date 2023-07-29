import { style } from '@vanilla-extract/css'

import { shadow, shadowSize } from '../brand/background.css'
import * as colours from '../brand/colours.css'

export const card = style([
	shadow,
	{
		background: 'white',
		padding: '1em',
		borderRadius: 4,
		boxShadow: `inset 0 0 0 .5px ${colours.vars.steel[6]}`,
		transition: 'box-shadow 0.15s ease-in-out',
		display: 'flex',
		flexDirection: 'column',

		'::after': {
			borderRadius: 4,
		},

		vars: {
			[shadowSize]: '6px',
		},

		selectors: {
			'a:hover &': {
				boxShadow: `inset 0 0 0 2px ${colours.vars.aqua[3]}`,
			},
		},
	},
])

export const wide = style({
	gridColumn: 'span 2',
})

export const title = style({
	margin: 0,
})

export const content = style({
	margin: 0,
})

export const number = style({
	fontSize: '4em',
	fontWeight: 300,
	alignSelf: 'flex-end',
	position: 'absolute',
	lineHeight: 1,
})
