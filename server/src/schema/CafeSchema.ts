import { Schema } from "mongoose";

import { ICafe } from "../types/ICafe";

export const CafeSchema = new Schema<ICafe>({
	name: {
		type: String,
		required: true,
		minlength: 6,
		maxlength: 10,
	},
	description: {
		type: String,
		maxlength: 256,
	},
	logo: {
		type: String,
	},
	location: {
		type: String,
	},
});
