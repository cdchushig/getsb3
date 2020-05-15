const ASSET_SERVER = 'https://cdn.assets.scratch.mit.edu/';
const PROJECT_SERVER = 'https://cdn.projects.scratch.mit.edu/';

import VirtualMachine from 'scratch-vm';
import ScratchStorage from 'scratch-storage';

const vm = new VirtualMachine();
const storage = new ScratchStorage();

export default {

    /**
     * @param {Asset} asset - calculate a URL for this asset.
     * @returns {string} a URL to download a project file.
     */
    getProjectUrl(asset) {
        const assetIdParts = asset.assetId.split('.');
        const assetUrlParts = [PROJECT_SERVER, 'internalapi/project/', assetIdParts[0], '/get/'];
        if (assetIdParts[1]) {
            assetUrlParts.push(assetIdParts[1]);
        }
        return collecteyData.projectJSON = assetUrlParts.join('');
    },
        
    /**
     * @param {Asset} asset - calculate a URL for this asset.
     * @returns {string} a URL to download a project asset (PNG, WAV, etc.)
     */
    getAssetUrl(asset) {
        const assetUrlParts = [
            ASSET_SERVER,
            'internalapi/asset/',
            asset.assetId,
            '.',
            asset.dataFormat,
            '/get/'
        ];
        return collecteyData.assets[asset.assetId] = assetUrlParts.join('');
    },

    fetchProject(projectId) {
    
        return storage
        .load(storage.AssetType.Project, projectId, storage.DataFormat.JSON)
        .then(projectAsset => {
            if (projectAsset) {
            //   state.projectState.onFetchedProjectData(projectAsset.data);
            setTimeout(() => { this.loadProject(); });
            } else {
            throw new Error('Could not find project');
            }
        })
        .catch(err => {
            console.error(err);
        });
    },

    loadProject() {
        return vm.loadProject(state.projectState.projectData)
        .then(() => {
            setTimeout(() => this.onSetProjectUnchanged(false));
        })
        .catch(e => {
            this.onError(e);
        });
    },


}