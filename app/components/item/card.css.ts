import { style } from "@vanilla-extract/css";
import * as colours from '../brand/colours.css'

export const card = style({
	background: 'white',
	position: 'relative',
	padding: '1em',
	borderRadius: 3,
	border: '.5px solid #0002',
	'::after': {
		content: '',
		borderRadius: 3,
		position: 'absolute',
		left: 6,
		right: -6,
		top: 6,
		bottom: -6,
		zIndex: -1,
		imageRendering: 'crisp-edges',
		backgroundImage: 'repeating-linear-gradient(-45deg, #0006, #0006 1px, transparent 1px, transparent 3px)'
	}
})

export const title = style({
	margin: 0,
})

export const content = style({
})
