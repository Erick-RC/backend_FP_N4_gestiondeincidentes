import express from 'express';
import { createImagen, getImagenesByIncidencia } from '../controllers/imagenController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, upload.single('imagen'), createImagen);
router.get('/:incidenciaId', getImagenesByIncidencia);

export default router;
