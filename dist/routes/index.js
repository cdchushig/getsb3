"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./api"));

var _scratchproject = _interopRequireDefault(require("./scratchproject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/api', _api["default"]);
router.use('/', _scratchproject["default"]);
router.get('/', function (req, res) {
  return res.render('index');
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map