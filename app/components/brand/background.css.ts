import { style } from "@vanilla-extract/css";
import * as colours from './colours.css'

export const main = style({
	imageRendering: 'crisp-edges',
	backgroundColor: colours.vars.steel[0],
	backgroundImage: `
		repeating-linear-gradient(60deg, transparent, transparent 1px, white 1px, white 16px),
		repeating-linear-gradient(-45deg, transparent, transparent 1px, white 1px, white 16px)
	`
})
