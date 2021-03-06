import express from 'express';
import ScratchProjectController from '../controllers/scratchproject';

const router = express.Router();
const scratchprojectController = new ScratchProjectController();

router.get('/:projectid', (req, res) => scratchprojectController.download(req, res));

export default router;