import express from 'express';
import scratchprojectRoute from './scratchproject';

const router = express.Router();

router.use('/api/v1/projects', scratchprojectRoute);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;