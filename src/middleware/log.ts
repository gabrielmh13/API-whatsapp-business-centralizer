import { Request, Response, NextFunction } from "express";

import db from "../database/db";

export function log(req: Request, res: Response, next: NextFunction) {
    let responseBody: any

    const originalJsonFunc = res.json.bind(res)

    res.json = (body) => {
        responseBody = body
        return originalJsonFunc(body)
    }

    res.on('finish', () => {
        db.insertLog(req.body, responseBody)
    })

    return next()
}