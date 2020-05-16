import ScratchProjectService from '../services/scratchproject';
import JSZip from 'jszip';

class ScratchProjectController {

  constructor() {
    this.projectid = 1;
    this.scratchprojectService = new ScratchProjectService();
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
      
      const zip = new JSZip();
      zip.file('project.json', projectJson);

      zip.generateAsync({ type: "nodebuffer"} )
      .then(content => { 
          res.setHeader("Content-Type", "application/zip");
          res.send(content);
      }).catch((err) =>  {
          console.log('err');
      })
      
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
  
export default ScratchProjectController;