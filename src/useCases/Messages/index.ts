import { MessagesRepository } from "../../repositories/implementations/MessagesRepository";
import { MessagesUseCase } from "./MessagesUseCase";
import { MessagesController } from "./MessagesController";

const messagesRepository = MessagesRepository.getInstance()
const messagesUseCase = new MessagesUseCase(messagesRepository)
const messagesController = new MessagesController(messagesUseCase)

export { messagesController }