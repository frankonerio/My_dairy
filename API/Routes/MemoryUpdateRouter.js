import MemoryUpdateController from '../Controllers/MemoryUpdateController';
import express from 'express';


const MemoryUpdateRouter = express.Router();

MemoryUpdateRouter.put('/api/v1/memories/:id', MemoryUpdateController.updateMemory);

export default MemoryUpdateRouter;