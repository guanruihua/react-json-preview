import React from "react"
import { PreviewJSON } from '..'

export default function () {
	const jsonValue = {
		num: 123,
		str: 'myString',
	}
	return <div>
		<PreviewJSON value={jsonValue} />
	</div>
}
