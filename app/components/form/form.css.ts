import { style } from '@vanilla-extract/css'
import { readableColor } from 'polished'
import * as colours from '../brand/colours.css'
import c from '@quarterto/colours'

const base = style({
	appearance: 'none',
	padding: '1ex 2ex',
	border: '0 none',
	font: 'inherit',
	borderRadius: 4,
})

export const input = style([
	base,
	{
		border: `1px solid ${colours.vars.steel[6]}`,
		boxShadow: `3px 3px #fff5, 3px 3px ${colours.vars.steel[6]}`,
	},
])

export const select = style([
	input,
	{
		background: 'white',
		appearance: 'auto',
	},
])

export const button = style([
	base,
	{
		cursor: 'pointer',
		background: colours.vars.steel[1],
		color: readableColor(c.steel[1], 'black', 'white'),
		boxShadow: `3px 3px ${colours.vars.steel[5]}`,
	},
])

export const form = style({
	display: 'flex',
	flexFlow: 'column',
	gap: '1ex',
	alignItems: 'flex-start',
})
