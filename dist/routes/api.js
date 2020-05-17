"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _scratchproject = _interopRequireDefault(require("../controllers/scratchproject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var scratchprojectController = new _scratchproject["default"]();
router.get('/', function (req, res) {
  return res.send('Bye!');
});
router.get('/:projectid', function (req, res) {
  return scratchprojectController.get(req, res);
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=api.js.map