import { IEmployee } from '../../types/IEmployee';

export interface IEmployeeService {
  create: (values: IEmployee) => Promise<IEmployee | null | undefined>;
  findOrFailById: (cafeId: string) => Promise<IEmployee>;
  list(params?: Partial<IEmployee>): Promise<IEmployee[] | undefined>;
  remove: (cafeId: string) => Promise<IEmployee | null | undefined>;
  update: (
    cafeId: string,
    values: Partial<IEmployee>
  ) => Promise<IEmployee | null | undefined>;
}
