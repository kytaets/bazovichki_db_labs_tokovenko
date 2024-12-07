import express from 'express';
import {
  createMediaContentHandler,
  getAllMediaContentsHandler,
  getMediaContentByIdHandler,
  updateMediaContentHandler,
  deleteMediaContentHandler,
} from '../controllers/mediaController.js';

const router = express.Router();

router.post('/', createMediaContentHandler); // Create media content
router.get('/', getAllMediaContentsHandler); // Get all media contents
router.get('/:id', getMediaContentByIdHandler); // Get media content by ID
router.put('/:id', updateMediaContentHandler); // Update media content
router.delete('/:id', deleteMediaContentHandler); // Delete media content

export default router;
