import pool from '../config/db.js';

export const createUser = async (username, email, password, role_id) => {
  try {
    const query =
      'INSERT INTO users (username, email, password, role_id) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [username, email, password, role_id];

    console.log('Creating user with data:', values); // Log the request data

    const result = await pool.query(query, values);

    console.log('User successfully created:', result.rows[0]); // Log success
    return result.rows[0];
  } catch (error) {
    console.error('Error creating user:', error.message); // Log error
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    console.log('Fetched all users:', result.rows); // Log success
    return result.rows;
  } catch (error) {
    console.error('Error fetching users:', error.message); // Log error
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);
    console.log('Fetched user by ID:', result.rows[0]); // Log success
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching user by ID:', error.message); // Log error
    throw error;
  }
};

export const updateUser = async (id, username, email, role_id) => {
  try {
    const query = `
      UPDATE users
      SET username = $1, email = $2, role_id = $3
      WHERE id = $4
      RETURNING *`;
    const values = [username, email, role_id, id];

    console.log('Updating user with ID:', id, 'Data:', values); // Log request data

    const result = await pool.query(query, values);

    console.log('User updated successfully:', result.rows[0]); // Log success
    return result.rows[0];
  } catch (error) {
    console.error('Error updating user:', error.message); // Log error
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);

    console.log('User deleted successfully:', result.rows[0]); // Log success
    return result.rows[0];
  } catch (error) {
    console.error('Error deleting user:', error.message); // Log error
    throw error;
  }
};
