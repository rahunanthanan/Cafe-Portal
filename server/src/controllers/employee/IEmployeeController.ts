import { Request, Response } from 'express';

import { IEmployee } from '../../types/IEmployee';

export interface IEmployeeController {
  list: (req: Request, res: Response) => Promise<Response<IEmployee[]>>;
  show: (req: Request, res: Response) => Promise<Response<IEmployee>>;
  create: (req: Request, res: Response) => Promise<Response<IEmployee>>;
  update: (req: Request, res: Response) => Promise<Response<IEmployee>>;
  remove: (req: Request, res: Response) => Promise<Response<void>>;
}
