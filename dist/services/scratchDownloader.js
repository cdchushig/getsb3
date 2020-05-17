'use strict';

var _scratchVm = require('scratch-vm');

var _scratchVm2 = _interopRequireDefault(_scratchVm);

var _scratchStorage = require('scratch-storage');

var _scratchStorage2 = _interopRequireDefault(_scratchStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ASSET_SERVER = 'https://cdn.assets.scratch.mit.edu/';
const PROJECT_SERVER_SB2 = 'https://cdn.projects.scratch.mit.edu/';
const PROJECT_SERVER_SB3 = 'https://projects.scratch.mit.edu/';

const collecteyData = { assets: {} };

function getProjectUrlSb2(asset) {
    const assetIdParts = asset.assetId.split('.');
    const assetUrlParts = [PROJECT_SERVER_SB2, 'internalapi/project/', assetIdParts[0], '/get/'];
    if (assetIdParts[1]) {
        assetUrlParts.push(assetIdParts[1]);
    }
    return collecteyData.projectJSON = assetUrlParts.join('');
};

function getProjectUrlSb3(asset) {
    const assetIdParts = asset.assetId.split('.');
    const assetUrlParts = [PROJECT_SERVER_SB3, assetIdParts[0], '/get/'];
    if (assetIdParts[1]) {
        assetUrlParts.push(assetIdParts[1]);
    }
    return collecteyData.projectJSON = assetUrlParts.join('');
};

function getAssetUrl(asset) {
    const assetUrlParts = [ASSET_SERVER, 'internalapi/asset/', asset.assetId, '.', asset.dataFormat, '/get/'];
    return collecteyData.assets[asset.assetId] = assetUrlParts.join('');
};

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

    const vm = new _scratchVm2.default();
    const storage = new _scratchStorage2.default();

    const AssetType = storage.AssetType;
    storage.addWebStore([AssetType.Project], getProjectUrlSb2);
    storage.addWebStore([AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound], getAssetUrl);
    vm.attachStorage(storage);

    return storage.load(storage.AssetType.Project, projectId).then(projectAsset => {
        return vm.loadProject(projectAsset.data);
    }).then(() => {
        return vm.toJSON();
    }).catch(err => {
        storage.addWebStore([AssetType.Project], getProjectUrlSb3);
        storage.addWebStore([AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound], getAssetUrl);
        vm.attachStorage(storage);
        return storage.load(storage.AssetType.Project, projectId).then(projectAsset => {
            return vm.loadProject(projectAsset.data);
        }).then(() => {
            return vm.toJSON();;
        });
    });
}

module.exports = { getJsonProject };
//# sourceMappingURL=scratchDownloader.js.map