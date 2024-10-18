import dotenv from "dotenv";
dotenv.config();

import config from "config";

if (config.has("NODE_ENV")) {
	const env = config.get("NODE_ENV");
	console.log(`Running on deployment: ${env}`);
}
