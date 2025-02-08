import { Router, type RequestHandler } from 'express';
import ItemController from '../controllers/ItemController';

const itemsRouter = Router();

itemsRouter.post('/', ItemController.create as unknown as RequestHandler);
itemsRouter.get('/', ItemController.index as unknown as RequestHandler);
itemsRouter.get('/:id', ItemController.show as unknown as RequestHandler);
itemsRouter.put('/:id', ItemController.update as unknown as RequestHandler);
itemsRouter.delete('/:id', ItemController.delete as unknown as RequestHandler);

export default itemsRouter;
