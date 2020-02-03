"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var controller = {};

controller.tasks = function (req, res) {
  res.json([{
    _id: 1,
    name: "Task one",
    description: "Lorem ipsun",
    date: "2020-01-30"
  }, {
    _id: 2,
    name: "Task two",
    description: "Lorem ipsun 2",
    date: "2020-01-30"
  }, {
    _id: 3,
    name: "Task three",
    description: "Lorem ipsun 3",
    date: "2020-01-30"
  }]);
};

controller.privateTasks = function (req, res) {
  res.json([{
    _id: 1,
    name: "Task one",
    description: "Lorem ipsun",
    date: "2020-01-30"
  }, {
    _id: 2,
    name: "Task two",
    description: "Lorem ipsun 2",
    date: "2020-01-30"
  }, {
    _id: 3,
    name: "Task three",
    description: "Lorem ipsun 3",
    date: "2020-01-30"
  }]);
}; // TODO


var verifyToken = function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unthorize Request");
  }

  var token = req.headers.authorization.split(" ")[1];

  if (token === null) {
    return res.status(401).send("Unthorize Request");
  }
};

var _default = controller;
exports["default"] = _default;