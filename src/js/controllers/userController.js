import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../models/User.js';

export const createUserHandler = async (req, res) => {
  try {
    const { username, email, password, id_role } = req.body;

    if (!username || !email || !password || !id_role) {
      return res.status(400).json({
        status: 'error',
        message: 'All fields are required',
        data: null,
      });
    }

    const user = await createUser(username, email, password, id_role);
    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data: user,
    });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to create user',
      data: null,
    });
  }
};

export const getAllUsersHandler = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      status: 'success',
      message: 'Users fetched successfully',
      data: users,
    });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch users',
      data: null,
    });
  }
};

export const getUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
        data: null,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'User fetched successfully',
      data: user,
    });
  } catch (error) {
    console.error('Error fetching user:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch user',
      data: null,
    });
  }
};

export const updateUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const fieldsToUpdate = req.body;

    // Check if at least one field is provided for updating
    if (Object.keys(fieldsToUpdate).length === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'At least one field must be provided for update',
        data: null,
      });
    }

    // Call the updateUser model with dynamic fields
    const updatedUser = await updateUser(id, fieldsToUpdate);

    if (!updatedUser) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
        data: null,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    console.error('Error updating user:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update user',
      data: null,
    });
  }
};

export const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);

    if (!deletedUser) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
        data: null,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
      data: deletedUser,
    });
  } catch (error) {
    console.error('Error deleting user:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete user',
      data: null,
    });
  }
};
