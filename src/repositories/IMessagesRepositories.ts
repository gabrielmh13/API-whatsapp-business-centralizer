import { Message } from "../model/Message"

interface IMessage {
    text: string
}

interface IMessageDTO {
    company: string
    number: string
    name: string
    layout: string
    messages: Array<IMessage>
}

interface IMessagesRepositories {
    findByNumber(number: string): boolean
    insertNumber({ company, number, name, layout, messages }: IMessageDTO): void
    removeNumber(number: string): void
    list(): Message[]
}

export { IMessage, IMessageDTO, IMessagesRepositories }
