import { IMessage } from "../repositories/IMessagesRepositories"

class Message {
    company?: string
    number?: string
    name?: string
    layout?: string
    messages?: Array<IMessage>
}

export { Message }