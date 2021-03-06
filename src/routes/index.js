import express from 'express';
import apiRoute from './api';
import scratchprojectRoute from './scratchproject';

const router = express.Router();

router.use('/api', apiRoute);
router.use('/', scratchprojectRoute);
router.get('/', (req, res) => res.render('index'));

export default router;