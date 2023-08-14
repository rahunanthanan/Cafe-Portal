import { model } from 'mongoose';

import { CAFE } from '../config/constants';
import type { ICafe } from '../types/ICafe';
import { CafeSchema } from '../schema/CafeSchema';

export const Cafe = model<ICafe>(CAFE, CafeSchema);
