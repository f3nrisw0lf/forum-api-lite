import { Router } from 'express';
import { checkUsernameExists } from '../controllers/user.controller.js';

const router = Router();

router.post('/unique', checkUsernameExists);

export default router;
