import pool from '../config/db.js';

export const createRole = async (name, canCreateMedia) => {
  try {
    const query =
      'INSERT INTO roles (name, can_create_media) VALUES ($1, $2) RETURNING *';
    const values = [name, canCreateMedia];
    const result = await pool.query(query, values);
    console.log('Role successfully created:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error creating role:', error.message);
    throw error;
  }
};

export const getAllRoles = async () => {
  try {
    const query = 'SELECT * FROM roles';
    const result = await pool.query(query);
    console.log('Fetched all roles:', result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error fetching roles:', error.message);
    throw error;
  }
};

export const getRoleById = async (id) => {
  try {
    const query = 'SELECT * FROM roles WHERE id = $1';
    const result = await pool.query(query, [id]);
    console.log('Fetched role by ID:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching role by ID:', error.message);
    throw error;
  }
};

export const updateRole = async (id, name, canCreateMedia) => {
  try {
    const query =
      'UPDATE roles SET name = $1, can_create_media = $2 WHERE id = $3 RETURNING *';
    const values = [name, canCreateMedia, id];
    const result = await pool.query(query, values);
    console.log('Role updated successfully:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error updating role:', error.message);
    throw error;
  }
};

export const deleteRole = async (id) => {
  try {
    const query = 'DELETE FROM roles WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    console.log('Role deleted successfully:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error deleting role:', error.message);
    throw error;
  }
};
