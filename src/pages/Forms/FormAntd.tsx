import type { FormEventHandler } from "react"

export const FormAntd = () => {
	const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
		const data = new FormData(event.currentTarget)
		event.preventDefault()
		for (const [key, value] of data.entries()) {
			console.log("key : " + key + "\nvalue: " + value)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="userName" />
			<button type="submit">Send</button>
		</form>
	)
}
