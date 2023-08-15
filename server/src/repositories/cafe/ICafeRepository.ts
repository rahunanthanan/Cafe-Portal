import { ICafe } from '../../types/ICafe';

export interface ICafeRepository {
  create: (values: ICafe) => Promise<ICafe>;
  find: (cafeId: string) => Promise<ICafe | null>;
  list: (params?: Partial<ICafe>) => Promise<ICafe[]>;
  update: (cafeId: string, values: Partial<ICafe>) => Promise<ICafe | null>;
  remove: (cafeId: string) => Promise<ICafe | null>;
}
