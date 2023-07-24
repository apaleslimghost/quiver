import { style, styleVariants } from '@vanilla-extract/css'

export const main = style({
	display: 'grid',
	gap: '1rem',
	gridTemplateColumns:
		'[bleed-start right-gutter-start left-gutter-start content-start] 1fr [content-end left-gutter-end right-gutter-end bleed-end]',
	'@media': {
		'(min-width: 40rem)': {
			gridTemplateColumns:
				'[bleed-start left-gutter-start] 1fr [left-gutter-end content-start] max(38rem, 75vw) [content-end right-gutter-start] 1fr [right-gutter-end bleed-end]',
		},
	},
})

export const area = styleVariants({
	content: { gridArea: 'content' },
	left: { gridArea: 'left-gutter' },
	right: { gridArea: 'right-gutter' },
	bleed: { gridArea: 'bleed' },
})
