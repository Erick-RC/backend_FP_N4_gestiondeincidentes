import jwt from 'jsonwebtoken';
import pool from '../config/db.js';

export const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const [result] = await pool.query('SELECT * FROM Usuario WHERE ID = ?', [decoded.id]);

    if (result.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado.' });
    }

    req.user = result[0];
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido.' });
  }
};
