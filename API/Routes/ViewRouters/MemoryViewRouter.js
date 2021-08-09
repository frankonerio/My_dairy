import MemoryViewController from '../../Controllers/ViewController/MemoryViewController'
import express from 'express'
import path from 'path'

const MemoryViewRouter = express.Router()


MemoryViewRouter.get('/view/memory', MemoryViewController.fetchMemory)

export default MemoryViewRouter
