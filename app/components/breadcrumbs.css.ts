import { style } from '@vanilla-extract/css'

export const breadcrumbs = style({
	listStyle: 'none',
	margin: 0,
	padding: 0,
})

export const breadcrumb = style({
	display: 'inline-block',
	'::after': {
		content: '›',
		marginInline: '0.5ch',
	},
})
