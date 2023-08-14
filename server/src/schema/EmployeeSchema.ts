import { Schema } from "mongoose";

import { IEmployee } from "../types/IEmployee";
import { GenderEnum } from "../types/GenderEnum";

export const EmployeeSchema = new Schema<IEmployee>({
	name: {
		type: String,
		minlength: 6,
		maxlength: 10,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		validate: {
			message: "Invalid email address",
			validator: (v: string) => {
				return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v);
			},
		},
	},
	phone: {
		type: String,
		required: true,
		validate: {
			message: "Invalid phone number",
			validator: (v: string) => {
				return /^8\d{7}|9\d{7}$/g.test(v);
			},
		},
	},
	gender: {
		type: String,
		required: true,
		enum: Object.values(GenderEnum),
	},
});
