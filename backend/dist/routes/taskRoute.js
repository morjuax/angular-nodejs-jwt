"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _TaskController = _interopRequireDefault(require("../controllers/TaskController"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get("/tasks", _TaskController["default"].tasks); // TODO Middleware

var verifyToken = function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("anUthorize Request");
  }

  var token = req.headers.authorization.split(" ")[1];

  if (token === null) {
    return res.status(401).send("anUthorize Request");
  }

  var payload = _jsonwebtoken["default"].verify(token, 'secrectKey');

  req.userId = payload._id;
  next();
};

router.get("/private-tasks", verifyToken, _TaskController["default"].privateTasks);
var _default = router;
exports["default"] = _default;