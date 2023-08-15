import { ICafe } from '../../types/ICafe';

export interface ICafeService {
  create: (values: ICafe) => Promise<ICafe | null | undefined>;
  findOrFailById: (cafeId: string) => Promise<ICafe>;
  list(params?: Partial<ICafe>): Promise<ICafe[] | undefined>;
  remove: (cafeId: string) => Promise<ICafe | null | undefined>;
  update: (
    cafeId: string,
    values: Partial<ICafe>
  ) => Promise<ICafe | null | undefined>;
}
