"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDto = exports.createUserDto = void 0;
const zod_1 = require("zod");
exports.createUserDto = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        active: zod_1.z.boolean().optional(),
    }),
});
exports.updateUserDto = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string().uuid() }),
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        active: zod_1.z.boolean().optional(),
    }),
});
