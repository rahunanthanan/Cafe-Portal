import { Router } from 'express';

import { appContainer } from '../config/inversify';
import { IEmployeeController } from '../controllers/employee';
import { TYPES } from '../config/types';
import { auth } from '../middleware/auth';

const employeeRouter = Router();

const controller = appContainer.get<IEmployeeController>(
  TYPES.EmployeeController
);

employeeRouter.get('/', [auth], controller.list);
employeeRouter.post('/', [auth], controller.create);
employeeRouter.put('/:employeeId', [auth], controller.update);
employeeRouter.delete('/:employeeId', [auth], controller.remove);

export { employeeRouter };
