import DashBoardController from '../../Controllers/ViewController/DashBoardController'
import express from 'express'
import path from 'path'

const DashBoardRouter = express.Router()


DashBoardRouter.get('/dashboard', DashBoardController.fetchDashboard)

export default DashBoardRouter
