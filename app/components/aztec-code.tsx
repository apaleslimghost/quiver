import BwipJs from 'bwip-js'
import { ComponentProps, FC } from 'react'

export const AztecCode: FC<{ data: string } & ComponentProps<'svg'>> = ({
	data,
	...props
}) => {
	const [{ pixs, pixx, pixy }] = BwipJs.raw('azteccodecompact', data)
	return (
		<svg
			{...props}
			viewBox={`0 0 ${pixx} ${pixy}`}
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
		>
			{pixs.map((pix, index) => (
				<rect
					fill={pix ? 'black' : 'white'}
					width={1}
					height={1}
					x={index % pixx}
					y={Math.floor(index / pixx)}
					key={index}
				/>
			))}
		</svg>
	)
}
