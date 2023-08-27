/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@uncover/js-utils-fetch/build/cjs/config.js":
/*!******************************************************************!*\
  !*** ./node_modules/@uncover/js-utils-fetch/build/cjs/config.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/* tslint:disable:no-console */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var CSRF_TOKEN_DEFAULT = 'Fetch';
var Config = /** @class */ (function () {
    // Constructor //
    function Config(options) {
        this._useCsrf = false;
        this._csrfToken = '';
        this._beforeHooks = [];
        this._afterHooks = [];
        this._server = options.server;
        this._useCsrf = options.useCsrf || false;
        this._csrfEndpoint = options.csrfEndpoint || '';
        this._csrfHeader = options.csrfHeader || '';
        this._useDebug = options.useDebug || false;
        this.resetCSRFToken();
        this.resetBeforeHooks();
        this.resetAfterHooks();
    }
    Object.defineProperty(Config.prototype, "csrfToken", {
        // Getters & Setters //
        get: function () {
            return this._csrfToken;
        },
        set: function (token) {
            this._csrfToken = token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "csrfEndpoint", {
        get: function () {
            return this._csrfEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "csrfHeader", {
        get: function () {
            return this._csrfHeader;
        },
        set: function (header) {
            this._csrfHeader = header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "server", {
        get: function () {
            return this._server;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "beforeHooks", {
        get: function () {
            return this._beforeHooks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "afterHooks", {
        get: function () {
            return this._afterHooks;
        },
        enumerable: false,
        configurable: true
    });
    // Public methods //
    // CSRF token
    Config.prototype.resetCSRFToken = function () {
        this._csrfToken = CSRF_TOKEN_DEFAULT;
    };
    // Before hooks
    Config.prototype.addBeforeHook = function (callback) {
        this.beforeHooks.push(callback);
    };
    Config.prototype.runBeforeHooks = function (url, request) {
        this.beforeHooks.forEach(function (hook) {
            hook(url, request);
        });
    };
    Config.prototype.resetBeforeHooks = function () {
        this._beforeHooks = [];
        if (this._useCsrf) {
            this._beforeHooks.push(this.addCsrfToken.bind(this));
        }
        if (this._useDebug) {
            this._beforeHooks.push(this.logRequest.bind(this));
        }
    };
    // After hooks
    Config.prototype.addAfterHook = function (callback) {
        this.afterHooks.push(callback);
    };
    Config.prototype.runAfterHooks = function (url, request, response) {
        this.afterHooks.forEach(function (hook) {
            hook(url, request, response);
        });
    };
    Config.prototype.resetAfterHooks = function () {
        this._afterHooks = [];
        if (this._useCsrf) {
            this._afterHooks.push(this.readCsrfToken.bind(this));
        }
        if (this._useDebug) {
            this._afterHooks.push(this.logResponse.bind(this));
        }
    };
    // Hooks
    Config.prototype.addCsrfToken = function (url, request) {
        request.headers.set(this.csrfHeader, this.csrfToken);
    };
    Config.prototype.readCsrfToken = function (url, request, response) {
        if (this._csrfToken === CSRF_TOKEN_DEFAULT) {
            var token = response.headers.get(this.csrfHeader);
            this._csrfToken = token;
        }
    };
    Config.prototype.logRequest = function (url, request) {
        if (this._useDebug) {
            console.log("REQUEST ".concat(request.method, " ").concat(url));
            console.log('  - Options:');
            Object.keys(request).forEach(function (option) {
                if (option !== 'headers') {
                    console.log("    - ".concat(option, ": ").concat(request[option]));
                }
            });
            if (request.headers) {
                console.log('  - Headers:');
                request.headers.forEach(function (value, key) {
                    console.log("    - ".concat(key, ": ").concat(value));
                });
            }
        }
    };
    Config.prototype.logResponse = function (url, request, response) {
        if (this._useDebug) {
            console.log("RESPONSE ".concat(request.method, " ").concat(url));
            if (response.headers) {
                console.log('  - Headers:');
                response.headers.forEach(function (value, key) {
                    console.log("    - ".concat(key, ": ").concat(value));
                });
            }
        }
    };
    return Config;
}());
exports["default"] = Config;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/@uncover/js-utils-fetch/build/cjs/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uncover/js-utils-fetch/build/cjs/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Service = exports.Config = void 0;
var config_js_1 = __importDefault(__webpack_require__(/*! ./config.js */ "./node_modules/@uncover/js-utils-fetch/build/cjs/config.js"));
var service_js_1 = __importDefault(__webpack_require__(/*! ./service.js */ "./node_modules/@uncover/js-utils-fetch/build/cjs/service.js"));
exports.Config = config_js_1.default;
exports.Service = service_js_1.default;
exports["default"] = {
    Config: exports.Config,
    Service: exports.Service,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@uncover/js-utils-fetch/build/cjs/service.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uncover/js-utils-fetch/build/cjs/service.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Service = /** @class */ (function () {
    // Constructor //
    function Service(config, url, api) {
        this._config = config;
        this._url = url;
        this._api = api;
    }
    Object.defineProperty(Service.prototype, "api", {
        // Getters & Setters //
        get: function () {
            return this._api;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    // Public methods //
    Service.prototype.buildUrl = function (pathUrl) {
        return "".concat(this._config.server).concat(this.url).concat(pathUrl);
    };
    Service.prototype.fetch = function (pathUrl, options) {
        return __awaiter(this, void 0, void 0, function () {
            var hasBody, headers, url, request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasBody = options.body && (options.method === 'POST' || options.method === 'PUT');
                        headers = new Headers();
                        if (hasBody) {
                            headers.set('content-type', options.contentType || 'application/json; charset=UTF-8');
                        }
                        headers.set('accept', options.accept || 'application/json');
                        headers.set('accept-encoding', options.acceptEncoding || 'gzip, deflate, br');
                        headers.set('connection', options.connection || 'keep-alive');
                        url = this.buildUrl(pathUrl);
                        request = {
                            method: options.method,
                            headers: headers,
                        };
                        if (hasBody) {
                            request.body = options.body;
                        }
                        this._config.runBeforeHooks(url, request);
                        return [4 /*yield*/, fetch(url, request)];
                    case 1:
                        response = _a.sent();
                        this._config.runAfterHooks(url, request, response);
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return Service;
}());
exports["default"] = Service;
//# sourceMappingURL=service.js.map

/***/ }),

/***/ "./src/services/auth/auth.model.ts":
/*!*****************************************!*\
  !*** ./src/services/auth/auth.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/services/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/services/auth/auth.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.postUserAvatar = exports.getUser = exports.deleteAuth = exports.getAuth = exports.postAuth = exports.getAccount = exports.putAccountRegister = exports.postAccountRegister = exports.putAccountRecover = exports.postAccountRecover = exports.putAccountChangeMail = exports.postAccountChangeMail = void 0;
var js_utils_fetch_1 = __webpack_require__(/*! @uncover/js-utils-fetch */ "./node_modules/@uncover/js-utils-fetch/build/cjs/index.js");
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
exports["default"] = AuthService;


/***/ }),

/***/ "./src/services/auth/index.ts":
/*!************************************!*\
  !*** ./src/services/auth/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/services/auth/auth.service.ts");
var Model = __webpack_require__(/*! ./auth.model */ "./src/services/auth/auth.model.ts");
exports["default"] = {
    Model: Model,
    Service: auth_service_1.default,
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModel = exports.AuthService = void 0;
var auth_1 = __webpack_require__(/*! ./services/auth */ "./src/services/auth/index.ts");
exports.AuthService = auth_1.default.Service;
exports.AuthModel = auth_1.default.Model;
exports["default"] = {
    Auth: auth_1.default,
};

})();

exports["alpha-auth-common"] = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=spa-frontend-services-dbg.js.map