import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../models/User.js';

// Controller for creating a new user
export const createUserHandler = async (req, res) => {
  try {
    const { username, email, password, role_id } = req.body;

    if (!username || !email || !password || !role_id) {
      return res.status(400).json({
        message: 'All fields (username, email, password, role_id) are required',
      });
    }

    const newUser = await createUser(username, email, password, role_id);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Controller for retrieving all users
export const getAllUsersHandler = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Controller for retrieving a single user by ID
export const getUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user by ID:', error.message);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Controller for updating a user
export const updateUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, role_id } = req.body;

    if (!username || !email || !role_id) {
      return res
        .status(400)
        .json({ message: 'Username, email, and role_id are required' });
    }

    const updatedUser = await updateUser(id, username, email, role_id);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error.message);
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Controller for deleting a user
export const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(deletedUser);
  } catch (error) {
    console.error('Error deleting user:', error.message);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
