import { useZxing, DecodeHintType } from "react-zxing";
import {BarcodeFormat} from '@zxing/library'
import { useNavigate } from "@remix-run/react";

export default function Scan() {
	const navigate = useNavigate()
	const { ref } = useZxing({
		hints: new Map([[DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.AZTEC]]]),
		onResult(result) {
			const text = result.getText()
			if(text.match(/^\/locations\/\d+$/)) {
				navigate(text)
			}
		}
	})

	return <>
		<video ref={ref} />
	</>
}
