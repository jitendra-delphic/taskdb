import { Router } from 'express';
const { register, login, resetPassword } = require('../controllers/user.controller');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', resetPassword);

export default router;
