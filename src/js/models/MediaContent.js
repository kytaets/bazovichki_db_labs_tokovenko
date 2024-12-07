import pool from '../config/db.js';

export const createMediaContent = async (title, content, createdBy) => {
  try {
    const query = `
      INSERT INTO media_contents (title, content, created_by, created_at) 
      VALUES ($1, $2, $3, NOW()) 
      RETURNING *`;
    const values = [title, content, createdBy];
    const result = await pool.query(query, values);
    console.log('Media content successfully created:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error creating media content:', error.message);
    throw error;
  }
};

export const getAllMediaContents = async () => {
  try {
    const query = 'SELECT * FROM media_contents';
    const result = await pool.query(query);
    console.log('Fetched all media contents:', result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error fetching media contents:', error.message);
    throw error;
  }
};

export const getMediaContentById = async (id) => {
  try {
    const query = 'SELECT * FROM media_contents WHERE id = $1';
    const result = await pool.query(query, [id]);
    console.log('Fetched media content by ID:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching media content by ID:', error.message);
    throw error;
  }
};

export const updateMediaContent = async (id, title, content) => {
  try {
    const query = `
      UPDATE media_contents 
      SET title = $1, content = $2 
      WHERE id = $3 
      RETURNING *`;
    const values = [title, content, id];
    const result = await pool.query(query, values);
    console.log('Media content successfully updated:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error updating media content:', error.message);
    throw error;
  }
};

export const deleteMediaContent = async (id) => {
  try {
    const query = 'DELETE FROM media_contents WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    console.log('Media content successfully deleted:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error deleting media content:', error.message);
    throw error;
  }
};
