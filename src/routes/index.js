import express from 'express';
import scratchprojectRoute from './scratchproject';

const router = express.Router();

router.use('/api', scratchprojectRoute);
router.get('/', (req, res) => res.send('Hello World2!'));

export default router;