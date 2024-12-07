import express from 'express';
import {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUserHandler); // Create user
router.get('/', getAllUsersHandler); // Get all users
router.get('/:id', getUserByIdHandler); // Get user by ID
router.put('/:id', updateUserHandler); // Update user
router.delete('/:id', deleteUserHandler); // Delete user

export default router;
