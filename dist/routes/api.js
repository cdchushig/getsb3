'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _scratchproject = require('../controllers/scratchproject');

var _scratchproject2 = _interopRequireDefault(_scratchproject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();
const scratchprojectController = new _scratchproject2.default();

router.get('/', (req, res) => res.send('Bye!'));
router.get('/:projectid', (req, res) => scratchprojectController.get(req, res));

exports.default = router;
//# sourceMappingURL=api.js.map