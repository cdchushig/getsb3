"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var ScratchprojectSchema = new Schema({
  project_id: {
    type: String,
    required: true
  },
  release_date: {
    type: Date,
    required: true
  }
});
module.exports = _mongoose["default"].model("ScratchProject", ScratchprojectSchema);
//# sourceMappingURL=scratchproject.js.map