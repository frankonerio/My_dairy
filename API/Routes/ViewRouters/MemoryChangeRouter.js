import MemoryChangeController from '../../Controllers/ViewController/MemoryChangeController'
import express from 'express'
import path from 'path'

const MemoryChangeRouter = express.Router()


MemoryChangeRouter.get('/login/creatememory', MemoryChangeController.fetchCreateMemoryPage)

export default MemoryChangeRouter
