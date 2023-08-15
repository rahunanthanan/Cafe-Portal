import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';

import { TYPES } from '../../config/types';
import { IEmployeeService } from '../../services/employee';
import { IEmployee } from '../../types/IEmployee';
import { BaseController } from '../BaseController';
import { IEmployeeController } from './IEmployeeController';
import { createSchema } from './utils/createSchema';
import { updateSchema } from './utils/updateSchema';

@injectable()
export class EmployeeController
  extends BaseController
  implements IEmployeeController
{
  @inject(TYPES.CafeService) private _employee?: IEmployeeService;

  public async list(req: Request, res: Response<IEmployee[]>) {
    let params: Partial<IEmployee> = {};

    let cafes;
    try {
      cafes = await this._employee?.list(params);
    } catch (error) {
      return this.failed<IEmployee>(res, error);
    }

    return this.ok<IEmployee[]>(res, cafes);
  }

  public async show(req: Request, res: Response<IEmployee>) {
    let cafe;
    try {
      cafe = await this._employee?.findOrFailById(req.params.cafeId);
    } catch (error) {
      return this.failed<IEmployee>(res, error);
    }

    return this.ok<IEmployee>(res, cafe);
  }

  public async create(req: Request, res: Response) {
    let values;
    try {
      values = await this.validate(req, createSchema);
    } catch (error: any) {
      return this.validationFailed(res, error);
    }

    let cafe;
    try {
      cafe = await this._employee?.create(values);
    } catch (error: any) {
      return this.failed(res, error);
    }

    return this.created(res, cafe);
  }

  public async update(req: Request, res: Response) {
    let values;
    try {
      values = await this.validate(req, updateSchema);
    } catch (error: any) {
      return this.validationFailed(res, error);
    }

    return this.ok(
      res,
      await this._employee?.update(req.params.cafeId, values)
    );
  }

  public async remove(req: Request, res: Response) {
    return this.ok(res, await this._employee?.remove(req.params.cafeId));
  }
}
