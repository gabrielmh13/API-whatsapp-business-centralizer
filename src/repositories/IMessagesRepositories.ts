import { Message } from "../model/Message"

interface IMessage {
    text: string
}

interface IMessageDTO {
    company: string
    number: string
    messages: Array<IMessage>
}

interface IMessagesRepositories {
    findByNumber(number: string): boolean
    insertNumber({ company, number, messages }: IMessageDTO): void
    removeNumber(number: string): void
    list(): Message[]
}

export { IMessage, IMessageDTO, IMessagesRepositories }
