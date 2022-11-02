import { Router } from 'express';
import {
  createPost,
  getPosts,
  getPost,
} from '../controllers/post.controller.js';

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', createPost);

export default router;
