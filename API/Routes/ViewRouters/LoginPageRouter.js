import LoginPageController from '../../Controllers/ViewController/LoginPageController.js';
import express from 'express'
import path from 'path'

const LoginPageRouter = express.Router()


LoginPageRouter.get('/login', LoginPageController.fetchLoginPage)

export default LoginPageRouter
