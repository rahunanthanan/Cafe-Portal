import { injectable, inject } from "inversify";

import { TYPES } from "../../config/types";
import { ICafeRepository } from "../../repositories/cafe";
import { ICafeService } from "./ICafeService";

@injectable()
export class CafeService implements ICafeService {
	@inject(TYPES.CafeRepository) private _cafe: ICafeRepository;
}
