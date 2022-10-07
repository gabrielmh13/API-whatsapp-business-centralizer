import { Request, Response } from "express";

import { ListNumbersUseCase } from "./ListNumbersUseCase";

class ListNumbersController {
    constructor(private listNumbersUseCase: ListNumbersUseCase) {

    }

    handle(req: Request, res: Response): Response {
        const numbers = this.listNumbersUseCase.execute()

        return res.json(numbers)
    }
}

export { ListNumbersController }