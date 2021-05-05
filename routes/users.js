import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
const userController = new UserController();

router.get('/', userController.getUserList);

export default router;