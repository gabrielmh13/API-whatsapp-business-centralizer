import { IMessage } from "../repositories/IMessagesRepositories";

export function createRequests(number: string, { text }: IMessage): Array<string> {
    const chunkSize = 40
    const messages = text.split('\r\n')
    const messagesChunked = []
    let res
    const bodysRequests = []

    for (let i = 0; i < messages.length; i += chunkSize) {
        const chunk = messages.slice(i, i + chunkSize);
        messagesChunked.push(chunk)
    }

    for (const chunk of messagesChunked) {
        const template = 'carson_template_teste_ofc_' + chunk.length
        const messageLines = []

        for (let message of chunk) {
            const line = {
                type: 'text',
                text: (message === '' ? message = ' ' : message)
            }

            messageLines.push(line)
        }

        const reqBody = JSON.stringify({
            messaging_product: 'whatsapp',
            to: number,
            type: 'template',
            template: {
                name: template,
                language: {
                    code: 'pt_BR'
                },
                components: [{
                    type: 'body',
                    parameters: messageLines
                }]
            }
        })

        bodysRequests.push(reqBody)
    }

    return bodysRequests
}