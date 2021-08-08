import HomePageController from '../../Controllers/ViewController/HomePageController'
import express from 'express'
import path from 'path'

const HomepageRouter = express.Router()

HomepageRouter.get('/', HomePageController.fetchHomePage)

export default HomepageRouter
