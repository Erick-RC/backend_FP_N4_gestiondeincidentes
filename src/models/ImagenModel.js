import pool from '../config/db.js';

export const createImagen = async (incidenciaId, url) => {
  const [result] = await pool.query(
    'INSERT INTO Imagen (Incidencia_ID, URL) VALUES (?, ?)',
    [incidenciaId, url]
  );
  return result.insertId;
};

export const getImagenesByIncidencia = async (incidenciaId) => {
  const [result] = await pool.query('SELECT * FROM Imagen WHERE Incidencia_ID = ?', [incidenciaId]);
  return result;
};
