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

export const updateMediaContent = async (id, fieldsToUpdate) => {
  const updates = [];
  const values = [];
  let counter = 1;

  for (const [key, value] of Object.entries(fieldsToUpdate)) {
    updates.push(`${key} = $${counter}`);
    values.push(value);
    counter++;
  }

  const query = `UPDATE media_contents SET ${updates.join(
    ', '
  )} WHERE id = $${counter} RETURNING *`;
  values.push(id);

  const result = await pool.query(query, values);
  return result.rows[0];
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
