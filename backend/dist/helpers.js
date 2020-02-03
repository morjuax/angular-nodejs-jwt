"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrypt = exports.encrypt = void 0;

var _cryptr = _interopRequireDefault(require("cryptr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var encrypt = function encrypt(string) {
  var cryptr = new _cryptr["default"]("myTotalySecretKey");
  return cryptr.encrypt(string);
};

exports.encrypt = encrypt;

var decrypt = function decrypt(string) {
  var cryptr = new _cryptr["default"]("myTotalySecretKey");
  return cryptr.decrypt(string);
};

exports.decrypt = decrypt;