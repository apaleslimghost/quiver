import { style } from "@vanilla-extract/css";

export const main = style({
	imageRendering: 'crisp-edges',
	backgroundColor: 'black',
	backgroundImage: `
		repeating-linear-gradient(60deg, transparent, transparent 1px, white 1px, white 16px),
		repeating-linear-gradient(-45deg, transparent, transparent 1px, white 1px, white 16px)
	`
})
