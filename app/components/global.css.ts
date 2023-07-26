import colours from '@quarterto/colours'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
	boxSizing: 'border-box',
})

globalStyle('a:link, a:visited', {
	color: 'inherit',
	textDecorationThickness: '0.1em',
})


globalStyle('a:hover', {
	textDecorationColor: colours.aqua[3],
	textDecorationThickness: '0.3em',
})
