import express from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/usuarioController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', createUser);
router.get('/:id', authMiddleware, getUser); // Ejemplo de ruta protegida
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

export default router;
