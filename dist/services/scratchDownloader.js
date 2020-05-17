"use strict";

require("core-js/modules/es6.date.to-json");

require("core-js/modules/es6.regexp.split");

var _scratchVm = _interopRequireDefault(require("scratch-vm"));

var _scratchStorage = _interopRequireDefault(require("scratch-storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ASSET_SERVER = 'https://cdn.assets.scratch.mit.edu/';
var PROJECT_SERVER_SB2 = 'https://cdn.projects.scratch.mit.edu/';
var PROJECT_SERVER_SB3 = 'https://projects.scratch.mit.edu/';
var collecteyData = {
  assets: {}
};

function getProjectUrlSb2(asset) {
  var assetIdParts = asset.assetId.split('.');
  var assetUrlParts = [PROJECT_SERVER_SB2, 'internalapi/project/', assetIdParts[0], '/get/'];

  if (assetIdParts[1]) {
    assetUrlParts.push(assetIdParts[1]);
  }

  return collecteyData.projectJSON = assetUrlParts.join('');
}

;

function getProjectUrlSb3(asset) {
  var assetIdParts = asset.assetId.split('.');
  var assetUrlParts = [PROJECT_SERVER_SB3, assetIdParts[0], '/get/'];

  if (assetIdParts[1]) {
    assetUrlParts.push(assetIdParts[1]);
  }

  return collecteyData.projectJSON = assetUrlParts.join('');
}

;

function getAssetUrl(asset) {
  var assetUrlParts = [ASSET_SERVER, 'internalapi/asset/', asset.assetId, '.', asset.dataFormat, '/get/'];
  return collecteyData.assets[asset.assetId] = assetUrlParts.join('');
}

;

function downloadJsonProject(projectId) {
  // const zip = new JSZip();
  // zip.file('project.json', projectJson);
  // zip.generateAsync({type:"blob"}).then(function (blob) { 
  //         saveAs(blob, projectId.concat('.zip'));                          
  // }, function (err) {
  //     console.log(err);
  // });
  return projectId;
}

function getJsonProject(projectId) {
  var vm = new _scratchVm["default"]();
  var storage = new _scratchStorage["default"]();
  var AssetType = storage.AssetType;
  storage.addWebStore([AssetType.Project], getProjectUrlSb2);
  storage.addWebStore([AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound], getAssetUrl);
  vm.attachStorage(storage);
  return storage.load(storage.AssetType.Project, projectId).then(function (projectAsset) {
    return vm.loadProject(projectAsset.data);
  }).then(function () {
    return vm.toJSON();
  })["catch"](function (err) {
    storage.addWebStore([AssetType.Project], getProjectUrlSb3);
    storage.addWebStore([AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound], getAssetUrl);
    vm.attachStorage(storage);
    return storage.load(storage.AssetType.Project, projectId).then(function (projectAsset) {
      return vm.loadProject(projectAsset.data);
    }).then(function () {
      return vm.toJSON();
      ;
    });
  });
}

module.exports = {
  getJsonProject: getJsonProject
};
//# sourceMappingURL=scratchDownloader.js.map