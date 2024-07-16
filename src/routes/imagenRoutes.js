import express from 'express';
import { createImagen, getImagenes } from '../controllers/imagenController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createImagen);
router.get('/:incidenciaId', getImagenes);

export default router;
