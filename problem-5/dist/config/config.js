"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigApp = void 0;
require("dotenv/config");
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().transform(Number),
    POSTGRES_HOST: zod_1.z.string(),
    POSTGRES_USER: zod_1.z.string(),
    POSTGRES_DB: zod_1.z.string(),
    POSTGRES_PASSWORD: zod_1.z.string(),
});
const parsedEnv = envSchema.parse(process.env);
exports.ConfigApp = {
    PORT: parsedEnv.PORT,
    POSTGRES_HOST: parsedEnv.POSTGRES_HOST,
    POSTGRES_USER: parsedEnv.POSTGRES_USER,
    POSTGRES_DB: parsedEnv.POSTGRES_DB,
    POSTGRES_PASSWORD: parsedEnv.POSTGRES_PASSWORD,
};
