import {getJsonProject} from './scratchDownloader.js';
import JSZip from 'jszip';

class ScratchProjectService {

    constructor() {
        this.projectId = 1;
    }

    async getJsonProject(projectId) {
        try {
            const projectJson = await getJsonProject(projectId.toString());
            return projectJson;
        } catch (err) {
            return err;
        }
    }

    async downloadJsonProject(projectId) {
        try {
            const projectJson = await getJsonProject(projectId.toString()); 
      
            const zip = new JSZip();
            zip.file('project.json', projectJson);

            zip.generateAsync({ type: "nodebuffer"} )
            .then(content => { 
                // saveAs(content, projectId.concat('.zip'));
                res.setHeader("Content-Type", "application/zip");
                res.send(content);
                // console.log(content);
                // return content;
            }).catch((err) =>  {
                console.log('err');
            })

        } catch (err) {
          res.status(400).send(err.message);
        }
    }
}

export default ScratchProjectService;