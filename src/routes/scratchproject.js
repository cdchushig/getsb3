import express from 'express';
import ScratchProjectController from '../controllers/scratchproject';

const router = express.Router();
const scratchprojectController = new ScratchProjectController();

router.get('/api/v1/projects/:projectid', (req, res) => scratchprojectController.get(req, res));

module.exports = router;