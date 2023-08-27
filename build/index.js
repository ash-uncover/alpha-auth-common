"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = exports.AuthService = void 0;
var auth_1 = require("./services/auth");
exports.AuthService = auth_1.default.Service;
exports.AuthModel = auth_1.default.Model;
exports.default = {
    Auth: auth_1.default,
};
//# sourceMappingURL=index.js.map