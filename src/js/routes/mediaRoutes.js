import express from 'express';
import {
  createMediaContentHandler,
  getAllMediaContentsHandler,
  getMediaContentByIdHandler,
  updateMediaContentHandler,
  deleteMediaContentHandler,
} from '../controllers/mediaController.js';

const router = express.Router();

router.post('/', createMediaContentHandler);
router.get('/', getAllMediaContentsHandler);
router.get('/:id', getMediaContentByIdHandler);
router.patch('/:id', updateMediaContentHandler);
router.delete('/:id', deleteMediaContentHandler);

export default router;
