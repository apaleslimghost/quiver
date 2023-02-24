import { useZxing, DecodeHintType } from "react-zxing";
import {BarcodeFormat} from '@zxing/library'
import { useNavigate } from "@remix-run/react";
import url from "~/lib/url";

export default function Scan() {
	const navigate = useNavigate()
	const { ref } = useZxing({
		hints: new Map([[DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.AZTEC]]]),
		onResult(result) {
			const text = result.getText()
			const id = parseInt(text)

			if(!Number.isNaN(id)) {
				navigate(url('location', { id }))
			}
		}
	})

	return <>
		<video ref={ref} />
	</>
}
