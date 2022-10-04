import { Request, Response } from "express";

import { MessagesUseCase } from "./MessagesUseCase";

class MessagesController {
    constructor(private messagesUseCase: MessagesUseCase) {

    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { company, number, name, layout, messages } = req.body

        if (!company || !number || !name || !layout || !messages) {
            return res.status(400).json({ message: "Malformed request syntax" })
        }

        const metaResponses = await this.messagesUseCase.execute({ company, number, name, layout, messages })
            .then((responses) => {
                return responses
            })
            .catch((err) => {
                res.status(500).send({ error: "Failed to send messages" })
            })

        return res.json({
            company,
            number,
            name,
            layout,
            responses: metaResponses
        })
    }
}

export { MessagesController }