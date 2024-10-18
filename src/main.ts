import dotenv from "dotenv";
dotenv.config();

import config from "config";

console.log(config.has("NODE_ENV"));
