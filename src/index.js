import { validateChatMessagePayload } from './lib/validate-payload'

init()

function init() {
	const form = /** @type {HTMLFormElement} */ (document.querySelector('form'))
	const output = /** @type {HTMLElement} */ (document.getElementById('output'))
	const yourDeviceName = /** @type {HTMLElement} */ (
		document.getElementById('your-device-name')
	)

	yourDeviceName.textContent = `You are: ${window.webxdc.selfName}`

	if (!(form && output)) {
		console.error('DOM is not set up properly')
	}

	form.addEventListener('submit', (event) => {
		event.preventDefault()

		const data = new FormData(form)

		const message = data.get('message')

		if (!message || typeof message !== 'string') return

		/** @satisfies {import('./lib/validate-payload').ChatMessagePayload} */
		const payload = {
			type: 'chat_message',
			data: message,
			senderName: window.webxdc.selfName,
		}
		window.webxdc.sendUpdate({ payload }, '')
		form.reset()
	})

	window.webxdc.setUpdateListener((update) => {
		if (!validateChatMessagePayload(update.payload)) {
			return
		}

		const lineItem = document.createElement('p')

		const displayedDeviceName = document.createElement('span')

		displayedDeviceName.classList.add('device-name')

		displayedDeviceName.textContent = update.payload.senderName

		lineItem.appendChild(displayedDeviceName)
		lineItem.appendChild(document.createTextNode(`: ${update.payload.data}`))

		output.appendChild(lineItem)
	})
}
