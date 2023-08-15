import { injectable } from 'inversify';

import { Cafe } from '../../models/Cafe';
import { ICafe } from '../../types/ICafe';
import { ICafeRepository } from './ICafeRepository';

@injectable()
export class CafeRepository implements ICafeRepository {
  public create(values: ICafe): Promise<ICafe> {
    return Cafe.create(values);
  }

  public find(cafeId: string): Promise<ICafe | null> {
    return Cafe.findOne({ _id: cafeId }).exec();
  }

  public list(params: Partial<ICafe> = {}): Promise<ICafe[]> {
    return Cafe.find(params).exec();
  }

  public update(cafeId: string, values: Partial<ICafe>): Promise<ICafe | null> {
    return Cafe.findOneAndUpdate({ _id: cafeId }, values).exec();
  }

  public remove(cafeId: string): Promise<ICafe | null> {
    return Cafe.findOneAndRemove({ _id: cafeId }).exec();
  }
}
