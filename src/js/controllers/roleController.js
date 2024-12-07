import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from '../models/Role.js';

export const createRoleHandler = async (req, res) => {
  try {
    const { title, can_create_media } = req.body;

    if (!title || can_create_media === undefined) {
      return res.status(400).json({
        status: 'error',
        message: 'All fields are required',
      });
    }

    const role = await createRole(title, can_create_media);
    res.status(201).json({
      status: 'success',
      data: role,
    });
  } catch (error) {
    console.error('Error creating role:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to create role',
    });
  }
};

export const getAllRolesHandler = async (req, res) => {
  try {
    const roles = await getAllRoles();
    res.status(200).json({
      status: 'success',
      data: roles,
    });
  } catch (error) {
    console.error('Error fetching roles:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch roles',
    });
  }
};

export const getRoleByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await getRoleById(id);

    if (!role) {
      return res.status(404).json({
        status: 'error',
        message: 'Role not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: role,
    });
  } catch (error) {
    console.error('Error fetching role:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch role',
    });
  }
};

export const updateRoleHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, can_create_media } = req.body;

    const updatedRole = await updateRole(id, title, can_create_media);

    if (!updatedRole) {
      return res.status(404).json({
        status: 'error',
        message: 'Role not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: updatedRole,
    });
  } catch (error) {
    console.error('Error updating role:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update role',
    });
  }
};

export const deleteRoleHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRole = await deleteRole(id);

    if (!deletedRole) {
      return res.status(404).json({
        status: 'error',
        message: 'Role not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: deletedRole,
    });
  } catch (error) {
    console.error('Error deleting role:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete role',
    });
  }
};
