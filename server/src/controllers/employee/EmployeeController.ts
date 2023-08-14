import { injectable } from 'inversify';

import { IEmployeeService } from '../../services/employee';
import { IEmployeeController } from './IEmployeeController';

@injectable()
export class EmployeeController implements IEmployeeController {
  constructor(private _cafe: IEmployeeService) {}
}
