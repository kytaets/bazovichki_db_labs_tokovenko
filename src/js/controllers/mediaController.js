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

    // Validate required fields
    if (!title || !content || !created_by) {
      return res.status(400).json({
        status: 'error',
        message: 'All fields are required',
      });
    }

    // Fetch user by ID
    const user = await getUserById(created_by);
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    // Fetch role by user role ID
    const role = await getRoleById(user.id_role);
    if (!role) {
      return res.status(404).json({
        status: 'error',
        message: 'Role not found',
      });
    }

    // Check if user has permission to create media
    if (!role.can_create_media) {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to create media content',
      });
    }

    // Proceed to create media content
    const mediaContent = await createMediaContent(title, content, created_by);
    res.status(201).json({
      status: 'success',
      data: mediaContent,
    });
  } catch (error) {
    console.error('Error creating media content:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to create media content',
    });
  }
};

export const getAllMediaContentsHandler = async (req, res) => {
  try {
    const mediaContents = await getAllMediaContents();
    res.status(200).json({
      status: 'success',
      data: mediaContents,
    });
  } catch (error) {
    console.error('Error fetching media contents:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch media contents',
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
      });
    }

    res.status(200).json({
      status: 'success',
      data: mediaContent,
    });
  } catch (error) {
    console.error('Error fetching media content:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch media content',
    });
  }
};

export const updateMediaContentHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedMediaContent = await updateMediaContent(id, title, content);

    if (!updatedMediaContent) {
      return res.status(404).json({
        status: 'error',
        message: 'Media content not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: updatedMediaContent,
    });
  } catch (error) {
    console.error('Error updating media content:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update media content',
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
      });
    }

    res.status(200).json({
      status: 'success',
      data: deletedMediaContent,
    });
  } catch (error) {
    console.error('Error deleting media content:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete media content',
    });
  }
};
