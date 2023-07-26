import { style, styleVariants } from '@vanilla-extract/css'

export const breadcrumbs = style({
	listStyle: 'none',
	margin: 0,
	padding: 0,
})

const baseBreadcrumb = style({ display: 'inline-block' })

export const breadcrumb = styleVariants({
	default: [
		baseBreadcrumb,
		{
			'::after': {
				content: '›',
				marginInline: '0.5ch',
			},
		},
	],
	noLastArrow: [baseBreadcrumb, {
		selectors: {
			'&:not(:last-child)::after': {
				content: '›',
				marginInline: '0.5ch',
			}
		}
	}],
})
