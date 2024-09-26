import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import workshopData from '../data/workshops.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.send(workshopData)
})

router.get('/:workshopID', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/workshop.html'))
})

export default router