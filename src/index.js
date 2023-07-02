import express from 'express'
import { createPool } from 'mysql2/promise'

const app = express()

const pool = createPool({
    host: 'localhost',
    user: 'ricardo',
    password: "gk4atia3",
    port: 3307
})

app.get('/',(req,res) => {
    res.send('Hello world')
})

app.get('/ping', async (req,res) => {
   const result = await pool.query('SELECT NOW()')
    res.json(result[0])
})

app.listen(3000)
console.log('server on port', 3000)