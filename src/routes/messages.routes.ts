import { Router } from 'express'

import { listNumbersController } from '../useCases/ListNumbers'
import { messagesController } from '../useCases/Messages/'

const messagesRouter = Router()

messagesRouter.post('/', (req, res) => {
    messagesController.handle(req, res)
})

messagesRouter.get('/', (req, res) => {
    listNumbersController.handle(req, res)
})

export { messagesRouter }