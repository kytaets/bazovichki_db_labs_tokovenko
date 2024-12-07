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
      return res.status(400).json({
        status: 'error',
        message: 'All fields are required',
        data: null,
      });
    }

    const user = await getUserById(created_by);
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
        data: null,
      });
    }

    const role = await getRoleById(user.role_id);
    if (!role) {
      return res.status(404).json({
        status: 'error',
        message: 'Role not found',
        data: null,
      });
    }

    if (!role.can_create_media) {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to create media content',
        data: null,
      });
    }

    const mediaContent = await createMediaContent(title, content, created_by);
    res.status(201).json({
      status: 'success',
      message: 'Media content created successfully',
      data: mediaContent,
    });
  } catch (error) {
    console.error('Error creating media content:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to create media content',
      data: null,
    });
  }
};

export const getAllMediaContentsHandler = async (req, res) => {
  try {
    const mediaContents = await getAllMediaContents();
    res.status(200).json({
      status: 'success',
      message: 'Media contents fetched successfully',
      data: mediaContents,
    });
  } catch (error) {
    console.error('Error fetching media contents:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch media contents',
      data: null,
    });
  }
};

export const getMediaContentByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const mediaContent = await getMediaContentById(id);

    if (!mediaContent) {
      return res.status(404).json({
        status: 'error',
        message: 'Media content not found',
        data: null,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Media content fetched successfully',
      data: mediaContent,
    });
  } catch (error) {
    console.error('Error fetching media content:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch media content',
      data: null,
    });
  }
};

export const updateMediaContentHandler = async (req, res) => {
  const { id } = req.params;
  const fieldsToUpdate = req.body; // Get the fields to update from the request body
  try {
    const updatedMediaContent = await updateMediaContent(id, fieldsToUpdate);

    if (!updatedMediaContent) {
      return res.status(404).json({
        status: 'error',
        message: 'Media content not found',
        data: null,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Media content updated successfully',
      data: updatedMediaContent,
    });
  } catch (error) {
    console.error('Error updating media content:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update media content',
      data: null,
    });
  }
};

export const deleteMediaContentHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMediaContent = await deleteMediaContent(id);

    if (!deletedMediaContent) {
      return res.status(404).json({
        status: 'error',
        message: 'Media content not found',
        data: null,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Media content deleted successfully',
      data: deletedMediaContent,
    });
  } catch (error) {
    console.error('Error deleting media content:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete media content',
      data: null,
    });
  }
};
