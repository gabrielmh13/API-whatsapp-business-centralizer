import { IMessage } from "../repositories/IMessagesRepositories"

class Message {
    company?: string
    number?: string
    messages?: Array<IMessage>
}

export { Message }