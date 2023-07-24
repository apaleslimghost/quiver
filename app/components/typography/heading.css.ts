import { style } from '@vanilla-extract/css'
import { modularScale } from 'polished'

export const levels = [1, 2, 3, 4, 5, 6].map((level) =>
	style({
		fontSize: modularScale(6 - level),
		fontWeight: 900,
		letterSpacing: '-0.05em',
	}),
)
