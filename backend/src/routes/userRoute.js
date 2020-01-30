import { Router } from 'express';
const router = Router();
import UserController from '../controllers/UserController'

router.get('/users', UserController.getUsers);
router.post('/users', UserController.store);
router.post('/users/signin', UserController.signin);


export default router;
