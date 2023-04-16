import { createTheme, globalFontFace, style } from "@vanilla-extract/css";

export const family = 'Iosevka Aile'

for(const weight of [100, 200, 300, 400, 500, 600, 700, 800, 900]) {
	for(const style of ['normal', 'italic']) {
		globalFontFace(family, {
			fontDisplay: 'swap',
			fontWeight: weight,
			fontStyle: style,
			src: `url('public/fonts/iosevka-aile-${weight}-${style}.woff2') format('woff2')`
		})
	}
}

export const main = style({
	fontFamily: family,
	fontWeight: 300
})
