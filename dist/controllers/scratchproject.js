'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scratchproject = require('../services/scratchproject');

var _scratchproject2 = _interopRequireDefault(_scratchproject);

var _jszip = require('jszip');

var _jszip2 = _interopRequireDefault(_jszip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ScratchProjectController {

  constructor() {
    this.projectid = 1;
    this.scratchprojectService = new _scratchproject2.default();
  }

  async get(req, res) {
    try {
      let projectId = req.params.projectid;
      // const projectJson = await getJsonProject(projectId.toString()); 
      const projectJson = await this.scratchprojectService.getJsonProject(projectId.toString());
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(projectJson);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async download(req, res) {
    try {
      let projectId = req.params.projectid;
      const projectJson = await this.scratchprojectService.getJsonProject(projectId.toString());

      const zip = new _jszip2.default();
      zip.file('project.json', projectJson);

      zip.generateAsync({ type: "nodebuffer" }).then(content => {
        res.setHeader("Content-Type", "application/zip");
        res.send(content);
      }).catch(err => {
        console.log('err');
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  // async getById(req, res) {
  //   const {
  //     params: { id }
  //   } = req;

  //   try {
  //     const product = await this.Product.find({ _id: id });
  //     res.send(product);
  //   } catch (err) {
  //     res.status(400).send(err.message);
  //   }
  // }
  // async create(req, res) {
  //   const product = new this.Product(req.body);
  //   try {
  //     await product.save();
  //     res.status(201).send(product);
  //   } catch (err) {
  //     res.status(422).send(err.message);
  //   }
  // }

}

exports.default = ScratchProjectController;
//# sourceMappingURL=scratchproject.js.map