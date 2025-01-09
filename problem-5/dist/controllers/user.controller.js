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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send(yield user_service_1.default.createUser(req.body));
        });
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send(yield user_service_1.default.getUser(req.params.id));
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send(yield user_service_1.default.updateUser(req.params.id, req.body));
        });
    }
    static getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, size } = req.query;
            return res.send(yield user_service_1.default.getUsers({ page: Number(page), size: Number(size) }));
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send(yield user_service_1.default.deleteUser(req.params.id));
        });
    }
}
exports.default = UserController;
