"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AuthService = exports.AuthModel = void 0;
var _auth = _interopRequireDefault(require("./services/auth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AuthService = _auth["default"].Service;
exports.AuthService = AuthService;
var AuthModel = _auth["default"].Model;
exports.AuthModel = AuthModel;
var _default = {
  Auth: _auth["default"]
};
exports["default"] = _default;