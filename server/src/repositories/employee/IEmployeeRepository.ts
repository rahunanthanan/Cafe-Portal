import { IEmployee } from '../../types/IEmployee';

export interface IEmployeeRepository {
  create: (values: IEmployee) => Promise<IEmployee>;
  find: (employeeId: string) => Promise<IEmployee | null>;
  list: (params?: Partial<IEmployee>) => Promise<IEmployee[]>;
  remove: (cafeId: string) => Promise<IEmployee | null>;
  update: (
    cafeId: string,
    values: Partial<IEmployee>
  ) => Promise<IEmployee | null>;
}
