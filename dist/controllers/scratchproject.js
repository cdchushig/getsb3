"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");

var _scratchproject = _interopRequireDefault(require("../services/scratchproject"));

var _jszip = _interopRequireDefault(require("jszip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScratchProjectController = /*#__PURE__*/function () {
  function ScratchProjectController() {
    _classCallCheck(this, ScratchProjectController);

    this.projectid = 1;
    this.scratchprojectService = new _scratchproject["default"]();
  }

  _createClass(ScratchProjectController, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var projectId, projectJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                projectId = req.params.projectid; // const projectJson = await getJsonProject(projectId.toString()); 

                _context.next = 4;
                return this.scratchprojectService.getJsonProject(projectId.toString());

              case 4:
                projectJson = _context.sent;
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(projectJson);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                res.status(400).send(_context.t0.message);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var projectId, projectJson, zip;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                projectId = req.params.projectid;
                _context2.next = 4;
                return this.scratchprojectService.getJsonProject(projectId.toString());

              case 4:
                projectJson = _context2.sent;
                zip = new _jszip["default"]();
                zip.file('project.json', projectJson);
                zip.generateAsync({
                  type: "nodebuffer"
                }).then(function (content) {
                  res.setHeader("Content-Type", "application/zip");
                  res.send(content);
                })["catch"](function (err) {
                  console.log('err');
                });
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                res.status(400).send(_context2.t0.message);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function download(_x3, _x4) {
        return _download.apply(this, arguments);
      }

      return download;
    }() // async getById(req, res) {
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

  }]);

  return ScratchProjectController;
}();

var _default = ScratchProjectController;
exports["default"] = _default;
//# sourceMappingURL=scratchproject.js.map