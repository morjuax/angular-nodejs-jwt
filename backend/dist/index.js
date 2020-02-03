"use strict";

var _express = _interopRequireDefault(require("express"));

require("./database");

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

var _taskRoute = _interopRequireDefault(require("./routes/taskRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3000 || process.env.port;
app.use(_express["default"].json());
app.use('/api', _userRoute["default"]);
app.use(_taskRoute["default"]);
app.listen(port, function () {
  console.log('Server on port ', port);
});