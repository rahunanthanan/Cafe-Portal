import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';

import { TYPES } from '../../config/types';
import { ICafeService } from '../../services/cafe';
import { ICafe } from '../../types/ICafe';
import { BaseController } from '../BaseController';
import { ICafeController } from './ICafeController';
import { createSchema } from './utils/createSchema';
import { updateSchema } from './utils/updateSchema';

@injectable()
export class CafeController extends BaseController implements ICafeController {
  @inject(TYPES.CafeService) private _cafe: ICafeService;

  public async list(req: Request, res: Response<ICafe[]>) {
    return this.ok(res, []);
  }

  public async create(req: Request, res: Response) {
    let values;
    try {
      values = await this.validate(req, createSchema);
    } catch (error: any) {
      return this.validationFailed(res, error);
    }

    return this.created(res, values);
  }

  public async update(req: Request, res: Response) {
    let values;
    try {
      values = await this.validate(req, updateSchema);
    } catch (error: any) {
      return this.validationFailed(res, error);
    }
    return this.ok(res, values);
  }

  public async remove(req: Request, res: Response) {
    return this.ok(res);
  }
}
