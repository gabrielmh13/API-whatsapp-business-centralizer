import { Pool } from 'pg'

declare global {
    var connection: Pool
}

class db {
    async connect() {
        if (global.connection) {
            return global.connection.connect()
        }

        const pool = new Pool({
            connectionString: `${process.env.POSTGRES_CONSTRING}`
        })

        global.connection = pool

        return pool.connect()
    }

    async insertLog(req: any, res: any) {
        const client = await this.connect()
        const query = `INSERT INTO logs(company, number, name, layout, request, response, datetime)
                        VALUES($1, $2, $3, $4, $5, $6, $7)`
        const values = [req.company, req.number, req.name, req.layout, req, res, new Date()]

        await client.query(query, values)

        client.release()
    }
}

export default new db()