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
  @inject(TYPES.CafeService) private _cafe?: ICafeService;

  public async list(req: Request, res: Response<ICafe[]>) {
    let params: Partial<ICafe> = {};
    if (req.query.location) {
      params.location = req.query.location as string;
    }

    let cafes;
    try {
      cafes = await this._cafe?.list(params);
    } catch (error) {
      return this.failed<ICafe>(res, error);
    }

    return this.ok<ICafe[]>(res, cafes);
  }

  public async show(req: Request, res: Response<ICafe>) {
    let cafe;
    try {
      cafe = await this._cafe?.findOrFailById(req.params.cafeId);
    } catch (error) {
      return this.failed<ICafe>(res, error);
    }

    return this.ok<ICafe>(res, cafe);
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
      cafe = await this._cafe?.create(values);
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

    return this.ok(res, await this._cafe?.update(req.params.cafeId, values));
  }

  public async remove(req: Request, res: Response) {
    return this.ok(res, await this._cafe?.remove(req.params.cafeId));
  }
}
