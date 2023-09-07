"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = exports.AuthService = void 0;
const auth_1 = __importDefault(require("./services/auth"));
exports.AuthService = auth_1.default.Service;
exports.AuthModel = auth_1.default.Model;
exports.default = {
    Auth: auth_1.default,
};
