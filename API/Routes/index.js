import express from 'express';
import IndexRouter from './IndexRouter';
import HomePageRouter from './HomePageRouter';

const index = express.Router();
// merge IndexRouter into index
index.use(HomePageRouter);
index.use(IndexRouter);


export default index;