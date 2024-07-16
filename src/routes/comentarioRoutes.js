import express from 'express';
import { createComentario, getComentarios } from '../controllers/comentarioController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createComentario);
router.get('/:incidenciaId', getComentarios);

export default router;
