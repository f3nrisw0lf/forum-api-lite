import { Router } from 'express';
import {
  createPost,
  getPosts,
  getPost,
} from '../controllers/post.controller.js';

import { checkUsernameInRequest } from '../utils/helper.util.js';

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', checkUsernameInRequest, createPost);

export default router;
