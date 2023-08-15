import { injectable, inject } from 'inversify';

import { TYPES } from '../../config/types';
import { ICafe } from '../../types/ICafe';
import { ICafeRepository } from '../../repositories/cafe';
import { ICafeService } from './ICafeService';

@injectable()
export class CafeService implements ICafeService {
  @inject(TYPES.CafeRepository) private _cafe?: ICafeRepository;

  public async create(values: ICafe): Promise<ICafe | null | undefined> {
    return await this._cafe?.create(values);
  }

  public async findOrFailById(cafeId: string): Promise<ICafe> {
    const cafe = await this._cafe?.find(cafeId);
    if (!cafe) throw new Error('Cafe not exits.');
    return cafe;
  }

  public async list(params: Partial<ICafe> = {}): Promise<ICafe[] | undefined> {
    return await this._cafe?.list(params);
  }

  public async remove(cafeId: string): Promise<ICafe | null | undefined> {
    const cafe = await this._cafe?.find(cafeId);
    if (!cafe) throw new Error('Cafe not exits.');
    return await this._cafe?.remove(cafeId);
  }

  public async update(
    cafeId: string,
    values: Partial<ICafe>
  ): Promise<ICafe | null | undefined> {
    const cafe = await this._cafe?.find(cafeId);
    if (!cafe) throw new Error('Cafe not exits.');
    return await this._cafe?.update(cafeId, values);
  }
}
