import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from '../models/Role.js';

// Create a role
export const createRoleHandler = async (req, res) => {
  try {
    const { name, can_create_media } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Role name is required' });
    }
    if (typeof can_create_media === 'undefined') {
      return res.status(400).json({ message: 'can_create_media is required' });
    }

    const newRole = await createRole(name, can_create_media);
    res.status(201).json(newRole);
  } catch (error) {
    console.error('Error creating role:', error.message);
    res.status(500).json({ error: 'Failed to create role' });
  }
};

// Get all roles
export const getAllRolesHandler = async (req, res) => {
  try {
    const roles = await getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    console.error('Error fetching roles:', error.message);
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
};

// Get a role by ID
export const getRoleByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const role = await getRoleById(id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    res.status(200).json(role);
  } catch (error) {
    console.error('Error fetching role by ID:', error.message);
    res.status(500).json({ error: 'Failed to fetch role' });
  }
};

// Update a role
export const updateRoleHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, can_create_media } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Role name is required' });
    }
    if (typeof can_create_media === 'undefined') {
      return res.status(400).json({ message: 'can_create_media is required' });
    }

    const updatedRole = await updateRole(id, name, can_create_media);
    if (!updatedRole) {
      return res.status(404).json({ message: 'Role not found' });
    }

    res.status(200).json(updatedRole);
  } catch (error) {
    console.error('Error updating role:', error.message);
    res.status(500).json({ error: 'Failed to update role' });
  }
};

// Delete a role
export const deleteRoleHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRole = await deleteRole(id);
    if (!deletedRole) {
      return res.status(404).json({ message: 'Role not found' });
    }

    res.status(200).json(deletedRole);
  } catch (error) {
    console.error('Error deleting role:', error.message);
    res.status(500).json({ error: 'Failed to delete role' });
  }
};
