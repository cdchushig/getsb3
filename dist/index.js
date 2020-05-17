"use strict";

var _config = _interopRequireDefault(require("config"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var debug = require('debug')('server:debug');

var app = (0, _express["default"])();
app.set('view engine', 'pug');
app.set('views', _path["default"].join(__dirname, 'views'));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use('/', _routes["default"]);
var listen = app.listen(_config["default"].get('port'), function () {
  debug("server is running on port ".concat(_config["default"].get('port'), " and in ").concat(_config["default"].get('name'), " mode"));
  console.log("server is running on port ".concat(_config["default"].get('port'), " and in ").concat(_config["default"].get('name'), " mode"));
});
module.exports = app;
module.exports.port = listen.address().port;
//# sourceMappingURL=index.js.map