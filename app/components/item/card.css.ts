import { style } from "@vanilla-extract/css";
import * as colours from '../brand/colours.css'

export const card = style({
	background: 'white',
	position: 'relative',
	padding: '1em',
	borderRadius: 4,
	boxShadow: 'inset 0 0 0 .5px #0002',
	transition: 'box-shadow 0.15s ease-in-out',
	'::after': {
		content: '',
		borderRadius: 4,
		position: 'absolute',
		left: 6,
		right: -6,
		top: 6,
		bottom: -6,
		zIndex: -1,
		imageRendering: 'crisp-edges',
		backgroundImage: 'repeating-linear-gradient(-45deg, #0006, #0006 1px, transparent 1px, transparent 3px)'
	},

	selectors: {
		'a:hover &': {
			boxShadow: `inset 0 0 0 2px ${colours.vars.ocean[4]}`,
		}
	}
})

export const title = style({
	margin: 0,
})

export const content = style({
})
