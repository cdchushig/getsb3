'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scratchDownloader = require('./scratchDownloader.js');

var _jszip = require('jszip');

var _jszip2 = _interopRequireDefault(_jszip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ScratchProjectService {

    constructor() {
        this.projectId = 1;
    }

    async getJsonProject(projectId) {
        try {
            const projectJson = await (0, _scratchDownloader.getJsonProject)(projectId.toString());
            return projectJson;
        } catch (err) {
            return err;
        }
    }

    async downloadJsonProject(projectId) {
        try {
            const projectJson = await (0, _scratchDownloader.getJsonProject)(projectId.toString());

            const zip = new _jszip2.default();
            zip.file('project.json', projectJson);

            zip.generateAsync({ type: "nodebuffer" }).then(content => {
                // saveAs(content, projectId.concat('.zip'));
                res.setHeader("Content-Type", "application/zip");
                res.send(content);
                // console.log(content);
                // return content;
            }).catch(err => {
                console.log('err');
            });
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
}

exports.default = ScratchProjectService;
//# sourceMappingURL=scratchproject.js.map