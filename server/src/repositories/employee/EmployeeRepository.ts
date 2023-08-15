import { injectable } from 'inversify';

import { Employee } from '../../models/Employee';
import { IEmployee } from '../../types/IEmployee';
import { IEmployeeRepository } from './IEmployeeRepository';

@injectable()
export class EmployeeRepository implements IEmployeeRepository {
  public create(values: IEmployee): Promise<IEmployee> {
    return Employee.create(values);
  }

  public find(employeeId: string): Promise<IEmployee | null> {
    return Employee.findOne({ _id: employeeId }).exec();
  }

  public list(params: Partial<IEmployee> = {}): Promise<IEmployee[]> {
    return Employee.find(params).exec();
  }

  public update(
    employeeId: string,
    values: Partial<IEmployee>
  ): Promise<IEmployee | null> {
    return Employee.findOneAndUpdate({ _id: employeeId }, values).exec();
  }

  public remove(employeeId: string): Promise<IEmployee | null> {
    return Employee.findOneAndRemove({ _id: employeeId }).exec();
  }
}
