import "reflect-metadata";
import mongoose from "mongoose";

import { app } from "./app";
import { MONGODB_URL } from "./config/env";

mongoose.Promise = global.Promise;

mongoose
	.set("strictQuery", false)
	.connect(MONGODB_URL)
	.then(() => {
		console.log("Database is connected");
	})
	.catch((err) => {
		console.log("There is problem while connecting database " + err);
	});

app.listen(4000, () => {
	console.log("Server is running on port 4000");
});

export { app };
