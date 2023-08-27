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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserAvatar = exports.getUser = exports.deleteAuth = exports.getAuth = exports.postAuth = exports.getAccount = exports.putAccountRegister = exports.postAccountRegister = exports.putAccountRecover = exports.postAccountRecover = exports.putAccountChangeMail = exports.postAccountChangeMail = void 0;
var js_utils_fetch_1 = require("@uncover/js-utils-fetch");
/**
 * POST /account/changemail
 * postAccountChangeMail
 */
var postAccountChangeMail = function (service, payload) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/account/changemail";
                options = {
                    method: 'POST',
                    body: JSON.stringify(payload),
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.postAccountChangeMail = postAccountChangeMail;
/**
 * PUT /account/changemail
 * putAccountChangeMail
 */
var putAccountChangeMail = function (service, payload) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/account/changemail";
                options = {
                    method: 'PUT',
                    body: JSON.stringify(payload),
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.putAccountChangeMail = putAccountChangeMail;
/**
 * POST /account/recover
 * postAccountRecover
 */
var postAccountRecover = function (service, payload) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/account/recover";
                options = {
                    method: 'POST',
                    body: JSON.stringify(payload),
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.postAccountRecover = postAccountRecover;
/**
 * PUT /account/recover
 * putAccountRecover
 */
var putAccountRecover = function (service) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/account/recover";
                options = {
                    method: 'PUT',
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.putAccountRecover = putAccountRecover;
/**
 * POST /account/register
 * postAccountRegister
 */
var postAccountRegister = function (service, payload) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/account/register";
                options = {
                    method: 'POST',
                    body: JSON.stringify(payload),
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.postAccountRegister = postAccountRegister;
/**
 * PUT /account/register
 * putAccountRegister
 */
var putAccountRegister = function (service) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/account/register";
                options = {
                    method: 'PUT',
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.putAccountRegister = putAccountRegister;
/**
 * GET /account/{accountId}
 * getAccount
 * @param {String} accountId - URL parameter
 */
var getAccount = function (service, accountId) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/account/".concat(accountId);
                options = {
                    method: 'GET',
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.getAccount = getAccount;
/**
 * POST /auth
 * Create session
 */
var postAuth = function (service) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/auth";
                options = {
                    method: 'POST',
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.postAuth = postAuth;
/**
 * GET /auth
 * Check auth
 */
var getAuth = function (service) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/auth";
                options = {
                    method: 'GET',
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.getAuth = getAuth;
/**
 * DELETE /auth
 * Delete session
 */
var deleteAuth = function (service) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/auth";
                options = {
                    method: 'DELETE',
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.deleteAuth = deleteAuth;
/**
 * GET /user/{userId}
 * getUser
 * @param {String} userId - URL parameter
 */
var getUser = function (service, userId) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/user/".concat(userId);
                options = {
                    method: 'GET',
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.getUser = getUser;
/**
 * POST /user/{userId}/avatar
 * postUserAvatar
 * @param {String} userId - URL parameter
 */
var postUserAvatar = function (service, userId) { return __awaiter(void 0, void 0, void 0, function () {
    var url, options, response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "/user/".concat(userId, "/avatar");
                options = {
                    method: 'POST',
                };
                return [4 /*yield*/, service.fetch(url, options)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.postUserAvatar = postUserAvatar;
var AuthService = function (config) {
    var service = new js_utils_fetch_1.Service(config, '/rest/api/v1/auth', {
        'account': {
            'changemail': {
                post: function (payload) { return (0, exports.postAccountChangeMail)(service, payload); },
                put: function (payload) { return (0, exports.putAccountChangeMail)(service, payload); },
            },
            'recover': {
                post: function (payload) { return (0, exports.postAccountRecover)(service, payload); },
                put: function () { return (0, exports.putAccountRecover)(service); },
            },
            'register': {
                post: function (payload) { return (0, exports.postAccountRegister)(service, payload); },
                put: function () { return (0, exports.putAccountRegister)(service); },
            },
            '$accountId': {
                get: function (accountId) { return (0, exports.getAccount)(service, accountId); },
            },
        },
        'auth': {
            post: function () { return (0, exports.postAuth)(service); },
            get: function () { return (0, exports.getAuth)(service); },
            delete: function () { return (0, exports.deleteAuth)(service); },
        },
        'user': {
            '$userId': {
                get: function (userId) { return (0, exports.getUser)(service, userId); },
                'avatar': {
                    post: function (userId) { return (0, exports.postUserAvatar)(service, userId); },
                },
            },
        },
    });
    return service;
};
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map