import { IMessage, IMessagesRepositories } from "../../repositories/IMessagesRepositories";

import { createRequests } from "../../utils/createRequests";
import { MetaClient } from "../../utils/metaClient";

interface IRequest {
    company: string
    number: string
    name: string
    layout: string
    messages: Array<IMessage>
}

interface IResponse {
    status: number
    response: Object
}

class MessagesUseCase {
    constructor(private messagesRepository: IMessagesRepositories) {

    }

    verifyNumberInList(number: string) {
        return new Promise(resolve => {

            function loop(rep: IMessagesRepositories) {
                const numberExistsInlist = rep.findByNumber(number)
                if (numberExistsInlist) {
                    setTimeout(() => loop(rep), 1000)
                }
                else {
                    return Promise.resolve(resolve(''))
                }
            }

            loop(this.messagesRepository)
        })
    }

    sendRequestsInSequence(bodys: Array<string>): Promise<any> {
        let responses: Array<IResponse> = []

        const promissesArray: any = []

        bodys.map((body) => {
            promissesArray.push(() => {
                return new Promise(resolve => {
                    resolve(MetaClient.post(`${process.env.META_URL}`, body).then((res) => {
                        responses.push({
                            status: res.status,
                            response: res.data
                        })

                        return responses
                    }))
                })
            })
        })

        return promissesArray.reduce(
            (promiseChain: any, currentFunction: any) => promiseChain.then(currentFunction),
            Promise.resolve()
        )
    }


    async execute({ company, number, name, layout, messages }: IRequest): Promise<any> {
        await this.verifyNumberInList(number)

        this.messagesRepository.insertNumber({ company, number, name, layout, messages })

        let bodys: Array<string> = []
        for (const message of messages) {
            bodys = bodys.concat(createRequests(number, message))
        }

        const responses = await this.sendRequestsInSequence(bodys)

        this.messagesRepository.removeNumber(number)

        return responses

    }
}

export { MessagesUseCase }