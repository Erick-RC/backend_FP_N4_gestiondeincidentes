import express from 'express';
import { createIncidencia, getIncidencias, updateIncidencia, deleteIncidencia } from '../controllers/incidenciaController.js.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createIncidencia);
router.get('/', getIncidencias);
router.put('/:id', authMiddleware, updateIncidencia);
router.delete('/:id', authMiddleware, deleteIncidencia);

export default router;
