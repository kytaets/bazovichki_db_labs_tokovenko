import {
  createMediaContent,
  getAllMediaContents,
  getMediaContentById,
  updateMediaContent,
  deleteMediaContent,
} from '../models/MediaContent.js';

import { getUserById } from '../models/User.js';
import { getRoleById } from '../models/Role.js';

export const createMediaContentHandler = async (req, res) => {
  try {
    const { title, content, created_by } = req.body;

    if (!title || !content || !created_by) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await getUserById(created_by);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const role = await getRoleById(user.role_id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    if (!role.can_create_media) {
      return res.status(403).json({
        message: 'You do not have permission to create media content',
      });
    }

    const mediaContent = await createMediaContent(title, content, created_by);
    res.status(201).json(mediaContent);
  } catch (error) {
    console.error('Error in createMediaContentHandler:', error.message);
    res.status(500).json({ error: 'Failed to create media content' });
  }
};

export const getAllMediaContentsHandler = async (req, res) => {
  try {
    const mediaContents = await getAllMediaContents();
    res.status(200).json(mediaContents);
  } catch (error) {
    console.error('Error in getAllMediaContentsHandler:', error.message);
    res.status(500).json({ error: 'Failed to fetch media contents' });
  }
};

export const getMediaContentByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const mediaContent = await getMediaContentById(id);
    if (!mediaContent) {
      return res.status(404).json({ message: 'Media content not found' });
    }

    res.status(200).json(mediaContent);
  } catch (error) {
    console.error('Error in getMediaContentByIdHandler:', error.message);
    res.status(500).json({ error: 'Failed to fetch media content' });
  }
};

export const updateMediaContentHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: 'Title and content are required' });
    }

    const updatedMediaContent = await updateMediaContent(id, title, content);
    if (!updatedMediaContent) {
      return res.status(404).json({ message: 'Media content not found' });
    }

    res.status(200).json(updatedMediaContent);
  } catch (error) {
    console.error('Error in updateMediaContentHandler:', error.message);
    res.status(500).json({ error: 'Failed to update media content' });
  }
};

export const deleteMediaContentHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMediaContent = await deleteMediaContent(id);
    if (!deletedMediaContent) {
      return res.status(404).json({ message: 'Media content not found' });
    }

    res.status(200).json(deletedMediaContent);
  } catch (error) {
    console.error('Error in deleteMediaContentHandler:', error.message);
    res.status(500).json({ error: 'Failed to delete media content' });
  }
};
