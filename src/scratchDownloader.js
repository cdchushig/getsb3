const ASSET_SERVER = 'https://cdn.assets.scratch.mit.edu/';
const PROJECT_SERVER = 'https://cdn.projects.scratch.mit.edu/';

const collecteyData = {assets: {}};
    
/**
 * @param {Asset} asset - calculate a URL for this asset.
 * @returns {string} a URL to download a project file.
 */
const getProjectUrl = function (asset) {
    const assetIdParts = asset.assetId.split('.');
    const assetUrlParts = [PROJECT_SERVER, 'internalapi/project/', assetIdParts[0], '/get/'];
    if (assetIdParts[1]) {
        assetUrlParts.push(assetIdParts[1]);
    }
    return collecteyData.projectJSON = assetUrlParts.join('');
};
    
/**
 * @param {Asset} asset - calculate a URL for this asset.
 * @returns {string} a URL to download a project asset (PNG, WAV, etc.)
 */
const getAssetUrl = function (asset) {
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
    
/**
 * 
 * @param {*} projectId used for filename
 * @param {*} projectJson json associated to scratch project
 */
const savetoZip = function (projectId, projectJson) {
    const zip = new JSZip();
    zip.file('project.json', projectJson);
    
    zip.generateAsync({type:"blob"}).then(function (blob) { 
            saveAs(blob, projectId.concat('.zip'));                          
    }, function (err) {
        console.log(err);
    });
    
    return projectId;    
}
    
/**
 * 
 * @param {*} projectId id scratch project
 */
const getJsonProject = function (projectId) {
    const vm = new window.NotVirtualMachine();
    const storage = new ScratchStorage();
    const AssetType = storage.AssetType;
    storage.addWebStore([AssetType.Project], getProjectUrl);
    storage.addWebStore([AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound], getAssetUrl);
    vm.attachStorage(storage);

    return new Promise((resolve, reject) => {
        storage.load(storage.AssetType.Project, projectId) // load project from project server (e.g. projects.scratch.mit.edu)
        .then(projectAsset => {
            return vm.loadProject(projectAsset.data);
        })
        .then(() => {
            const project_json = vm.toJSON(); 
            console.log("Success downloading project ", projectId);
            console.log(project_json);    
            project_id = savetoZip(projectId, project_json);
            return;
        })
        .catch((err) => {
            console.log("Error downloading project", projectId);
            console.log(err);
            reject(Error(err));
            return;
        })
    })  
};

module.exports = getJsonProject;