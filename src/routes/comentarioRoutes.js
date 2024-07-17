import express from 'express';
import { createComentario, getComentarios, deleteComentario} from '../controllers/comentarioController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createComentario);
router.get('/:incidenciaId', getComentarios);
router.delete('/:id', authMiddleware, deleteComentario);

export default router;
