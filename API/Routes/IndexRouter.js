import express from 'express';
import IndexController from '../Controllers/Indexcontroller';

const IndexRouter = express.Router();

IndexRouter.get('/api/v1', IndexController.fetchWelcomeMessage);

export default IndexRouter;