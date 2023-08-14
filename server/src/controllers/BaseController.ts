import { Request, Response } from 'express';
import { Schema } from 'yup';

import { ValidationError } from '../exceptions/ValidationError';

export abstract class BaseController {
  public async validate(req: Request, schema: Schema) {
    try {
      return await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
    } catch (err: any) {
      throw new ValidationError(
        err.message,
        err.inner.reduce(
          (carry: any, error: any) => ({
            ...carry,
            [error.path]: error.errors,
          }),
          {}
        )
      );
    }
  }

  public failed<T>(res: Response, error: Error | unknown) {
    return this.response(res, { message: (error as Error).message }, 400);
  }

  public validationFailed<T>(res: Response, error: ValidationError) {
    return this.response(
      res,
      { message: error.message, errors: error.errors },
      422
    );
  }

  public ok<T>(res: Response, entity?: T) {
    return this.response(res, entity, 201);
  }

  public created<T>(res: Response, entity?: T) {
    return this.response(res, entity, 201);
  }

  public response<T>(res: Response, json?: T, statusCode: number = 200) {
    return res.status(statusCode).json(json);
  }
}
