import express from 'express';
import mocks from '../mocks';

import {getJsonProject} from '../scratchDownloader.js';

const router = express.Router();

router
    .get('/', async(req, res, next) => {
        try {
            res.status(200).json('Hello world!')
        } catch(error) {
            res.status(500).send({message: 'Internal server error'})
        }
    })
    .get('/api/v1/projects/', async(req, res, next) => {
        let query = mocks
        res.status(200).json(query)
    })
    .get('/api/v1/projects/:projectid', async(req, res, next) => {
        // let query = mocks.filter(item => 
        //     item.projectid == req.params.projectid
        // )
        let projectId = req.params.projectid

        getJsonProject(projectId.toString())
            .then((result) => {
                console.log(result);
                console.log('getJsonProject')
                callback(null, result, project_id);
            })
            .catch((err) => {
                callback(err, projectId);
        });

        

        // res.status(200).json(query)
    })


module.exports = router;