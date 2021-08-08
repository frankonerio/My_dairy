import SignUpPageController from '../../Controllers/ViewController/SignUpPageController';
import express from 'express'


const SignUpPageRouter = express.Router()


SignUpPageRouter.get('/signup', SignUpPageController.fetchSignupPage)

export default SignUpPageRouter
