'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _scratchproject = require('./scratchproject');

var _scratchproject2 = _interopRequireDefault(_scratchproject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.use('/api', _api2.default);
router.use('/', _scratchproject2.default);
router.get('/', (req, res) => res.render('index'));

exports.default = router;
//# sourceMappingURL=index.js.map