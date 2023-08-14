import { Response } from 'express';

import { ICafe } from '../../types/ICafe';

export interface ICafeController {
  list: (req: Request, res: Response) => Promise<Response<ICafe[]>>;
  create: (req: Request, res: Response) => Promise<Response<ICafe>>;
  update: (req: Request, res: Response) => Promise<Response<ICafe>>;
  remove: (req: Request, res: Response) => Promise<Response<void>>;
}
