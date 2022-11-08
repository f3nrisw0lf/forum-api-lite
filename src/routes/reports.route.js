import { Router } from 'express';
import { createReport } from '../controllers/report.controller.js';
import { checkUsernameInRequest } from '../utils/helper.util.js';

const router = Router();

router.post('/', checkUsernameInRequest, createReport);

export default router;
