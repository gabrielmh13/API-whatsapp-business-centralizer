import { Message } from "../../model/Message";
import { IMessagesRepositories } from "../../repositories/IMessagesRepositories";

class ListNumbersUseCase {
    constructor(private messageRepository: IMessagesRepositories) {

    }

    execute(): Message[] {
        return this.messageRepository.list()
    }
}

export { ListNumbersUseCase }