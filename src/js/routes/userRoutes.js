import express from 'express';
import {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUserHandler);
router.get('/', getAllUsersHandler);
router.get('/:id', getUserByIdHandler);
router.patch('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

export default router;
