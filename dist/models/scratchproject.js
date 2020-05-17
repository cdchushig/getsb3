"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const ScratchprojectSchema = new Schema({
    project_id: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    }
});

module.exports = _mongoose2.default.model("ScratchProject", ScratchprojectSchema);
//# sourceMappingURL=scratchproject.js.map