"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_middleware_1 = require("./../middlewares/validate.middleware");
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_dto_1 = require("../dtos/user.dto");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.default.getUsers);
router.get("/:id", user_controller_1.default.getUser);
router.post("/", (0, validate_middleware_1.validate)(user_dto_1.createUserDto), user_controller_1.default.create);
router.put("/:id", (0, validate_middleware_1.validate)(user_dto_1.updateUserDto), user_controller_1.default.update);
router.delete("/:id", user_controller_1.default.delete);
exports.default = router;
