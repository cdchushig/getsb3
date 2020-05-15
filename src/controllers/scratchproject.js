import {getJsonProject} from '../scratchDownloader.js';

class ScratchProjectController {

  constructor() {
    this.projectid = 1;
  }

  async get(req, res) {
    try {
      let projectId = req.params.projectid;
      const projectJson = await getJsonProject(projectId.toString()); 
      res.setHeader('Content-Type', 'application/json')
      res.status(200).send(projectJson);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

// router.get('/api/v1/projects/:projectid', async(req, res, next) => {
//     try{
//         let projectId = req.params.projectid;

//         getJsonProject(projectId.toString())
//             .then((result) => {
//                 return res.send(result)
//             })
//             .catch((err) => {
//                 console.log(err);
//         })
    
//     } catch(e) {
//         res.status(500).send({message: 'Internal server error'})
//     }
// })

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