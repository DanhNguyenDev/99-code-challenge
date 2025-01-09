"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const user_model_1 = require("../model/user.model");
const http_status_1 = require("http-status");
const paginator_1 = require("../utils/paginator");
class UserService {
    static createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.save(data);
            return {
                message: "Create User Successfully",
                status: http_status_1.status.OK,
            };
        });
    }
    static updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: {
                    id,
                },
            });
            if (!user) {
                return {
                    message: "Not found User",
                    status: http_status_1.status.BAD_REQUEST,
                };
            }
            Object.assign(user, data);
            yield this.userRepository.save(user);
            return {
                message: "Update User Successfully",
                status: http_status_1.status.OK,
            };
        });
    }
    static getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: {
                    id,
                },
            });
            if (!user) {
                return {
                    message: "Not found User",
                    status: http_status_1.status.BAD_REQUEST,
                };
            }
            return {
                message: "Get User Successfully",
                status: http_status_1.status.OK,
                data: user,
            };
        });
    }
    static getUsers(_a) {
        return __awaiter(this, arguments, void 0, function* ({ size, page }) {
            const { limit, offset } = (0, paginator_1.getPagination)(page, size);
            const [rows, count] = yield this.userRepository.findAndCount({
                take: limit,
                skip: offset,
            });
            return {
                message: "Get User success",
                data: (0, paginator_1.getPagingData)({ rows, count }, page, limit, (users) => {
                    return users.map((user) => {
                        return { id: user.id, name: user.name, active: user.active };
                    });
                }),
                status: http_status_1.status.OK,
            };
        });
    }
    static deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: {
                    id,
                },
            });
            if (!user) {
                return {
                    message: "Not found User",
                    status: http_status_1.status.BAD_REQUEST,
                };
            }
            yield this.userRepository.delete({ id });
            return {
                message: "Delete User Successfully",
                status: http_status_1.status.OK,
            };
        });
    }
}
UserService.userRepository = database_1.AppDataSource.getRepository(user_model_1.User);
exports.default = UserService;
