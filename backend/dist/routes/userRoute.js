"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get('/users', _UserController["default"].getUsers);
router.post('/users', _UserController["default"].store);
router.post('/users/signin', _UserController["default"].signin);
var _default = router;
exports["default"] = _default;