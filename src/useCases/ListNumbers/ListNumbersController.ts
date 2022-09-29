import { Request, Response } from "express";

import { ListNumbersUseCase } from "./ListNumbersUseCase";

class ListNumbersController {
    constructor(private listNumbersUseCase: ListNumbersUseCase) {

    }

    handle(req: Request, res: Response): Response {
        const numbers = this.listNumbersUseCase.execute()

        return res.status(200).json(numbers)
    }
}

export { ListNumbersController }