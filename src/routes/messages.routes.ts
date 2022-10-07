import { Router } from 'express'

import { listNumbersController } from '../useCases/ListNumbers'
import { messagesController } from '../useCases/Messages/'

import { log } from '../middleware/log'

const messagesRouter = Router()

messagesRouter.post('/', log, (req, res) => {
    messagesController.handle(req, res)
})

messagesRouter.get('/', (req, res) => {
    listNumbersController.handle(req, res)
})

export { messagesRouter }