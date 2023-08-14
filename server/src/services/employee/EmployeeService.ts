import { injectable, inject } from "inversify";

import { TYPES } from "../../config/types";
import { IEmployeeRepository } from "../../repositories/employee";
import { IEmployeeService } from "./IEmployeeService";

@injectable()
export class EmployeeService implements IEmployeeService {
	@inject(TYPES.EmployeeRepository) private _employee: IEmployeeRepository;
}
