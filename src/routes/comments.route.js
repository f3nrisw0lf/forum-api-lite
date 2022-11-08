import { Router } from 'express';
import { createComment } from '../controllers/comment.controller.js';
import { checkUsernameInRequest } from '../utils/helper.util.js';

const router = Router();

router.post('/', checkUsernameInRequest, createComment);

export default router;
