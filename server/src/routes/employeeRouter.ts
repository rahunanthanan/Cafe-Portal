import { Router } from "express";
import { body, validationResult } from "express-validator";

import { auth } from "../middleware/auth";
import { EmployeeController } from "../controllers/EmployeeController";

const employeeRouter = Router();

employeeRouter.post("/", [auth], new EmployeeController());

export { employeeRouter };
