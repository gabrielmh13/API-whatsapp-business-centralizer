import axios from 'axios'

import * as dotenv from 'dotenv'
dotenv.config()

export const MetaClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${process.env.META_TOKEN}`
    },
})