import { createVar, style } from "@vanilla-extract/css";
import * as colours from './colours.css'

export const main = style({
	imageRendering: 'crisp-edges',
	backgroundColor: colours.vars.steel[0],
	backgroundImage: `
		repeating-linear-gradient(60deg, transparent, transparent 1px, white 1px, white 16px),
		repeating-linear-gradient(-45deg, transparent, transparent 1px, white 1px, white 16px)
	`
})

export const shadowSize = createVar()

export const shadow = style({
	position: 'relative',

	'::after': {
		content: '',
		position: 'absolute',
		transform: `translate(${shadowSize}, ${shadowSize})`,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		zIndex: -1,
		imageRendering: 'crisp-edges',
		backgroundImage: 'repeating-linear-gradient(-45deg, #0006, #0006 1px, transparent 1px, transparent 3px)'
	}
})
