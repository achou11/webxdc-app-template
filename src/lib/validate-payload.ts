export type ChatMessagePayload = {
	type: 'chat_message'
	data: string
	senderName: string
}

export function validateChatMessagePayload(
	payload: unknown
): payload is ChatMessagePayload {
	if (!payload) return false
	if (typeof payload !== 'object') return false

	const typeIsValid = 'type' in payload && payload.type === 'chat_message'
	const dataIsValid = 'data' in payload && typeof payload.data === 'string'
	const senderNameIsValid =
		'senderName' in payload && typeof payload.senderName === 'string'

	return typeIsValid && dataIsValid && senderNameIsValid
}
