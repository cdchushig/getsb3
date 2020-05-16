import express from 'express';
import ScratchProjectController from '../controllers/scratchproject';

const router = express.Router();
const scratchprojectController = new ScratchProjectController();

router.get('/', (req, res) => res.send('Bye!'));
router.get('/:projectid', (req, res) => scratchprojectController.get(req, res));

export default router;