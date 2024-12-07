import express from 'express';
import {
  createRoleHandler,
  getAllRolesHandler,
  getRoleByIdHandler,
  updateRoleHandler,
  deleteRoleHandler,
} from '../controllers/roleController.js';

const router = express.Router();

router.post('/', createRoleHandler);
router.get('/', getAllRolesHandler);
router.get('/:id', getRoleByIdHandler);
router.put('/:id', updateRoleHandler);
router.delete('/:id', deleteRoleHandler);

export default router;
