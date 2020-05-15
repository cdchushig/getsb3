const ASSET_SERVER = 'https://cdn.assets.scratch.mit.edu/';
const PROJECT_SERVER = 'https://cdn.projects.scratch.mit.edu/';

import VirtualMachine from 'scratch-vm';
import ScratchStorage from 'scratch-storage';

const collecteyData = {assets: {}};
    

function getProjectUrl(asset) {
    const assetIdParts = asset.assetId.split('.');
    const assetUrlParts = [PROJECT_SERVER, 'internalapi/project/', assetIdParts[0], '/get/'];
    if (assetIdParts[1]) {
        assetUrlParts.push(assetIdParts[1]);
    }
    return collecteyData.projectJSON = assetUrlParts.join('');
};
    

function getAssetUrl(asset) {
    const assetUrlParts = [
        ASSET_SERVER,
        'internalapi/asset/',
        asset.assetId,
        '.',
        asset.dataFormat,
        '/get/'
    ];
    return collecteyData.assets[asset.assetId] = assetUrlParts.join('');
};
    

function savetoZip(projectId, projectJson) {
    const zip = new JSZip();
    zip.file('project.json', projectJson);
    zip.generateAsync({type:"blob"}).then(function (blob) { 
            saveAs(blob, projectId.concat('.zip'));                          
    }, function (err) {
        console.log(err);
    });
    
    return projectId;    
}


function getJsonProject(projectId) {
    
    const vm = new VirtualMachine();
    const storage = new ScratchStorage();

    const AssetType = storage.AssetType;
    storage.addWebStore([AssetType.Project], getProjectUrl);
    storage.addWebStore([AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound], getAssetUrl);
    vm.attachStorage(storage);

    // return new Promise((resolve, reject) => {
    return storage.load(storage.AssetType.Project, projectId)
        .then(projectAsset => {
            return vm.loadProject(projectAsset.data);
        })
        .then(() => {
            const project_json = vm.toJSON(); 
            return project_json;
        })
        .catch((err) => {
            reject(Error(err));
            return;
    })
      
}

module.exports = {getJsonProject};