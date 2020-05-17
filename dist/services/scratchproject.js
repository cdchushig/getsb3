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

var _scratchDownloader = require("./scratchDownloader.js");

var _jszip = _interopRequireDefault(require("jszip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScratchProjectService = /*#__PURE__*/function () {
  function ScratchProjectService() {
    _classCallCheck(this, ScratchProjectService);

    this.projectId = 1;
  }

  _createClass(ScratchProjectService, [{
    key: "getJsonProject",
    value: function () {
      var _getJsonProject2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(projectId) {
        var projectJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _scratchDownloader.getJsonProject)(projectId.toString());

              case 3:
                projectJson = _context.sent;
                return _context.abrupt("return", projectJson);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getJsonProject(_x) {
        return _getJsonProject2.apply(this, arguments);
      }

      return getJsonProject;
    }()
  }, {
    key: "downloadJsonProject",
    value: function () {
      var _downloadJsonProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(projectId) {
        var projectJson, zip;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _scratchDownloader.getJsonProject)(projectId.toString());

              case 3:
                projectJson = _context2.sent;
                zip = new _jszip["default"]();
                zip.file('project.json', projectJson);
                zip.generateAsync({
                  type: "nodebuffer"
                }).then(function (content) {
                  // saveAs(content, projectId.concat('.zip'));
                  res.setHeader("Content-Type", "application/zip");
                  res.send(content); // console.log(content);
                  // return content;
                })["catch"](function (err) {
                  console.log('err');
                });
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                res.status(400).send(_context2.t0.message);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function downloadJsonProject(_x2) {
        return _downloadJsonProject.apply(this, arguments);
      }

      return downloadJsonProject;
    }()
  }]);

  return ScratchProjectService;
}();

var _default = ScratchProjectService;
exports["default"] = _default;
//# sourceMappingURL=scratchproject.js.map