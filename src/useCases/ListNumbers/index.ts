import { MessagesRepository } from "../../repositories/implementations/MessagesRepository";
import { ListNumbersController } from "./ListNumbersController";
import { ListNumbersUseCase } from "./ListNumbersUseCase";

const messagesRepository = MessagesRepository.getInstance()
const listNumbersUseCase = new ListNumbersUseCase(messagesRepository)
const listNumbersController = new ListNumbersController(listNumbersUseCase)

export { listNumbersController }