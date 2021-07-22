import express from 'express';
import HomePageController from '../Controllers/HomePageController';
import path from 'path';

const HomePageRouter = express.Router();

HomePageRouter.get('/', HomePageController.fetchHomePage);
HomePageRouter.use(express.static(path.join(__dirname, '..','..', '/UI')));

export default HomePageRouter;