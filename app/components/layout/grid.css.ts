import { style } from '@vanilla-extract/css'

export default style({
	display: 'grid',
	gridTemplateRows: 'masonry',
	gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
	gap: '1em',
})
