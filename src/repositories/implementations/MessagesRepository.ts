import { Message } from "../../model/Message";
import { IMessageDTO, IMessagesRepositories } from "../IMessagesRepositories";

class MessagesRepository implements IMessagesRepositories {

    private messages: Message[]

    private static INSTANCE: MessagesRepository

    private constructor() {
        this.messages = []
    }

    public static getInstance(): MessagesRepository {
        if (!MessagesRepository.INSTANCE) {
            MessagesRepository.INSTANCE = new MessagesRepository()
        }

        return MessagesRepository.INSTANCE
    }

    findByNumber(number: string): boolean {
        const numberExistsInList = this.messages.find(message => message.number === number)

        if (numberExistsInList) {
            return true
        }

        return false
    }
    insertNumber({ company, number, messages }: IMessageDTO): void {
        const message = new Message()

        Object.assign(message, {
            company,
            number,
            messages
        })

        this.messages.push(message)
    }
    removeNumber(number: string): void {
        const indexNumber = this.messages.findIndex(message => message.number === number)

        this.messages.splice(indexNumber, 1)
    }

    list(): Message[] {
        return this.messages
    }
}


export { MessagesRepository }