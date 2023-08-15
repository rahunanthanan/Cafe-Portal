import { injectable, inject } from 'inversify';

import { TYPES } from '../../config/types';
import { IEmployee } from '../../types/IEmployee';
import { IEmployeeRepository } from '../../repositories/employee';
import { IEmployeeService } from './IEmployeeService';

@injectable()
export class EmployeeService implements IEmployeeService {
  @inject(TYPES.EmployeeRepository) private _employee?: IEmployeeRepository;

  public async create(
    values: IEmployee
  ): Promise<IEmployee | null | undefined> {
    return await this._employee?.create(values);
  }

  public async findOrFailById(employeeId: string): Promise<IEmployee> {
    const employee = await this._employee?.find(employeeId);
    if (!employee) throw new Error('Employee not exits.');
    return employee;
  }

  public async list(
    params: Partial<IEmployee> = {}
  ): Promise<IEmployee[] | undefined> {
    return await this._employee?.list(params);
  }

  public async remove(
    employeeId: string
  ): Promise<IEmployee | null | undefined> {
    const employee = await this._employee?.find(employeeId);
    if (!employee) throw new Error('Employee not exits.');
    return await this._employee?.remove(employeeId);
  }

  public async update(
    employeeId: string,
    values: Partial<IEmployee>
  ): Promise<IEmployee | null | undefined> {
    const employee = await this._employee?.find(employeeId);
    if (!employee) throw new Error('Employee not exits.');
    return await this._employee?.update(employeeId, values);
  }
}
