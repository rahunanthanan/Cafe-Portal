import { model } from 'mongoose';

import { EMPLOYEE } from '../config/constants';
import type { IEmployee } from '../types/IEmployee';
import { EmployeeSchema } from '../schema/EmployeeSchema';

export const Employee = model<IEmployee>(EMPLOYEE, EmployeeSchema);
