import { createTheme } from '@vanilla-extract/css'
import colours from '@quarterto/colours'
import { lighten, mix } from 'polished'

const [themeClass, vars] = createTheme(
	Object.fromEntries(
		Object.entries(colours).map(
			([key, values]) =>
				[
					key,
					Object.fromEntries(values.map((v, i) => [i.toString(), v] as const)),
				] as const,
		),
	) as {
		[k in keyof typeof colours]: Record<
			'0' | '1' | '2' | '3' | '4' | '5' | '6',
			string
		>
	},
)

export { themeClass, vars }
