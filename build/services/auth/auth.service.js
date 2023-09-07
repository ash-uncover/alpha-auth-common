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
exports.postUserAvatar = exports.getUser = exports.deleteAuth = exports.getAuth = exports.postAuth = exports.getAccount = exports.putAccountRegister = exports.postAccountRegister = exports.putAccountRecover = exports.postAccountRecover = exports.putAccountChangeMail = exports.postAccountChangeMail = void 0;
const js_utils_fetch_1 = require("@uncover/js-utils-fetch");
const postAccountChangeMail = (service, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/accounts/changemail`;
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.postAccountChangeMail = postAccountChangeMail;
const putAccountChangeMail = (service, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/accounts/changemail`;
    const options = {
        method: 'PUT',
        body: JSON.stringify(payload),
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.putAccountChangeMail = putAccountChangeMail;
const postAccountRecover = (service, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/accounts/recover`;
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.postAccountRecover = postAccountRecover;
const putAccountRecover = (service, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/accounts/recover`;
    const options = {
        method: 'PUT',
        body: JSON.stringify(payload),
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.putAccountRecover = putAccountRecover;
const postAccountRegister = (service, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/accounts/register`;
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.postAccountRegister = postAccountRegister;
const putAccountRegister = (service, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/accounts/register`;
    const options = {
        method: 'PUT',
        body: JSON.stringify(payload),
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.putAccountRegister = putAccountRegister;
const getAccount = (service, accountId) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/accounts/${accountId}`;
    const options = {
        method: 'GET',
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.getAccount = getAccount;
const postAuth = (service, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/auth`;
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.postAuth = postAuth;
const getAuth = (service) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/auth`;
    const options = {
        method: 'GET',
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.getAuth = getAuth;
const deleteAuth = (service) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/auth`;
    const options = {
        method: 'DELETE',
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.deleteAuth = deleteAuth;
const getUser = (service, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/users/${userId}`;
    const options = {
        method: 'GET',
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.getUser = getUser;
const postUserAvatar = (service, userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/users/${userId}/avatar`;
    const options = {
        method: 'POST',
        body: payload,
    };
    const response = yield service.fetch(url, options);
    const responseData = yield response.json();
    return responseData;
});
exports.postUserAvatar = postUserAvatar;
const AuthService = (config) => {
    const service = new js_utils_fetch_1.Service(config, '/rest/api/v1', {
        'accounts': {
            'changemail': {
                post: (payload) => (0, exports.postAccountChangeMail)(service, payload),
                put: (payload) => (0, exports.putAccountChangeMail)(service, payload),
            },
            'recover': {
                post: (payload) => (0, exports.postAccountRecover)(service, payload),
                put: (payload) => (0, exports.putAccountRecover)(service, payload),
            },
            'register': {
                post: (payload) => (0, exports.postAccountRegister)(service, payload),
                put: (payload) => (0, exports.putAccountRegister)(service, payload),
            },
            '$accountId': {
                get: (accountId) => (0, exports.getAccount)(service, accountId),
            },
        },
        'auth': {
            post: (payload) => (0, exports.postAuth)(service, payload),
            get: () => (0, exports.getAuth)(service),
            delete: () => (0, exports.deleteAuth)(service),
        },
        'users': {
            '$userId': {
                get: (userId) => (0, exports.getUser)(service, userId),
                'avatar': {
                    post: (userId, payload) => (0, exports.postUserAvatar)(service, userId, payload),
                },
            },
        },
    });
    return service;
};
exports.default = AuthService;
