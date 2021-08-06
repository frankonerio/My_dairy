import AllMemoriesController from '../Controllers/AllMemoriesController';
import express from 'express';
import Gate from '../Gates/Gate';

const AllmemoriesRouter = express.Router()

AllmemoriesRouter.get('/api/v1/memories',Gate.blockInvasion, AllMemoriesController.fetchAllMemories)

export default AllmemoriesRouter
