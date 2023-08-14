import { Router } from 'express';

import { appContainer } from '../config/inversify';
import { ICafeController } from '../controllers/cafe';
import { TYPES } from '../config/types';
import { auth } from '../middleware/auth';

const cafeRouter = Router();
const controller = appContainer.get<ICafeController>(TYPES.CafeController);

cafeRouter.get('/', [auth], controller.list);
cafeRouter.post('/', [auth], controller.create);
cafeRouter.put('/:cafeId', [auth], controller.update);
cafeRouter.delete('/:cafeId', [auth], controller.remove);

export { cafeRouter };
