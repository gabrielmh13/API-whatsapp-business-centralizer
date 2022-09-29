import { Router } from 'express'

import { messagesRouter } from './messages.routes'

const router = Router()

router.use('/messages', messagesRouter)


export { router }