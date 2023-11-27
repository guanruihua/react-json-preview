import React from "react"

export interface PreviewJSON {
	value: Record<string, any>
}

export function PreviewJSON(props: PreviewJSON) {
	const { value } = props
	return <div>
		{JSON.stringify(value)}
	</div>
}