import { Container } from 'inversify';

import { CafeRepository } from '../repositories/cafe';
import { ICafeRepository } from '../repositories/cafe';
import { EmployeeRepository } from '../repositories/employee';
import { IEmployeeRepository } from '../repositories/employee';
import { CafeService } from '../services/cafe';
import { ICafeService } from '../services/cafe';
import { EmployeeService } from '../services/employee';
import { IEmployeeService } from '../services/employee';
import { CafeController } from '../controllers/cafe';
import { ICafeController } from '../controllers/cafe';
import { EmployeeController } from '../controllers/employee';
import { IEmployeeController } from '../controllers/employee';
import { TYPES } from './types';

const appContainer = new Container();

// Repositories
appContainer.bind<ICafeRepository>(TYPES.CafeRepository).to(CafeRepository);
appContainer
  .bind<IEmployeeRepository>(TYPES.EmployeeRepository)
  .to(EmployeeRepository);

// Services
appContainer.bind<ICafeService>(TYPES.CafeService).to(CafeService);
appContainer.bind<IEmployeeService>(TYPES.CafeRepository).to(EmployeeService);

// Controllers
appContainer.bind<ICafeController>(TYPES.CafeController).to(CafeController);
appContainer
  .bind<IEmployeeController>(TYPES.EmployeeController)
  .to(EmployeeController);

export { appContainer };
