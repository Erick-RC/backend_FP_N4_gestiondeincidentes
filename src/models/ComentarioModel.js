// src/models/comentarioModel.js
import pool from '../config/db.js';

export const createComentario = async (incidenciaId, usuarioId, contenido) => {
  const [result] = await pool.query(
    'INSERT INTO Comentario (Incidencia_ID, Usuario_ID, Contenido, Fecha) VALUES (?, ?, ?, NOW())',
    [incidenciaId, usuarioId, contenido]
  );
  return result.insertId;
};

export const getComentariosByIncidencia = async (incidenciaId) => {
  const [result] = await pool.query('SELECT * FROM Comentario WHERE Incidencia_ID = ?', [incidenciaId]);
  return result;
};

export const deleteComentario = async (id) => {
  const [result] = await pool.query('DELETE FROM Comentario WHERE ID = ?', [id]);
  return result.affectedRows;
};
