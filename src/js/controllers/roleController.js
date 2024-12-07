import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from '../models/Role.js';

export const createRoleHandler = async (req, res) => {
  try {
    const { name, can_create_media } = req.body;

    if (!name || can_create_media === undefined) {
      return res.status(400).json({
        status: 'error',
        message: 'All fields are required',
        data: null,
      });
    }

    const role = await createRole(name, can_create_media);
    res.status(201).json({
      status: 'success',
      message: 'Role created successfully',
      data: role,
    });
  } catch (error) {
    console.error('Error creating role:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to create role',
      data: null,
    });
  }
};

export const getAllRolesHandler = async (req, res) => {
  try {
    const roles = await getAllRoles();
    res.status(200).json({
      status: 'success',
      message: 'Roles fetched successfully',
      data: roles,
    });
  } catch (error) {
    console.error('Error fetching roles:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch roles',
      data: null,
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
        data: null,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Role fetched successfully',
      data: role,
    });
  } catch (error) {
    console.error('Error fetching role:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch role',
      data: null,
    });
  }
};

export const updateRoleHandler = async (req, res) => {
  const { id } = req.params;
  const fieldsToUpdate = req.body; // Get the fields to update from the request body
  try {
    const updatedRole = await updateRole(id, fieldsToUpdate);

    if (!updatedRole) {
      return res.status(404).json({
        status: 'error',
        message: 'Role not found',
        data: null,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Role updated successfully',
      data: updatedRole,
    });
  } catch (error) {
    console.error('Error updating role:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update role',
      data: null,
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
        data: null,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Role deleted successfully',
      data: deletedRole,
    });
  } catch (error) {
    console.error('Error deleting role:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete role',
      data: null,
    });
  }
};
