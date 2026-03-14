import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()


import express from 'express'
import { PrismaClient } from '@prisma/client'
import { kategoria_router } from './kategoria_router.js'
import { komentarz_router } from './komentarze_router.js'
import { wpis_router } from './wpisy_router.js'

const app = express()
const port = 3000
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.use('/kategorie', kategoria_router)
app.use('/komentarze', komentarz_router)
app.use('/wpisy', wpis_router)

app.get('/', (req, res) => {
    res.send('dziala')
    console.log(process.env.DATABASE_URL)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})