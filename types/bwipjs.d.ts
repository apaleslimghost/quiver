declare module 'bwip-js' {
	namespace BwipJs {
		type TwoDData = {
			pixs: (0 | 1)[],
			pixx: number,
			pixy: number,
			height: number,
			width: number
		}

		export function raw(bcid: string, data: string): TwoDData[]
	}

	export = BwipJs
}
