"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            console.log({ error: error.format() });
            const errorMessage = error.errors
                .map((details) => `${details.path.join(".")}: ${details.message}`)
                .join(", ");
            res.status(400).send({ message: errorMessage, status: 400 });
        }
        return next(error);
    }
};
exports.validate = validate;
