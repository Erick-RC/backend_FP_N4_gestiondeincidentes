import pool from '../config/db.js';

export const createIncidencia = async (usuarioId, asunto, tipo, descripcion, estado) => {
  const [result] = await pool.query(
    'INSERT INTO Incidencia (Usuario_ID, Asunto, Tipo, Descripción, Estado, Fecha_creación) VALUES (?, ?, ?, ?, ?, NOW())',
    [usuarioId, asunto, tipo, descripcion, estado]
  );
  return result.insertId;
};

export const getIncidencias = async (filters) => {
  const query = 'SELECT * FROM Incidencia WHERE 1=1';
  const params = [];
  
  if (filters.estado) {
    query += ' AND Estado = ?';
    params.push(filters.estado);
  }
  
  if (filters.fecha) {
    query += ' AND Fecha_creación >= ?';
    params.push(filters.fecha);
  }
  
  const [result] = await pool.query(query, params);
  return result;
};

// Otros métodos: updateIncidencia, deleteIncidencia...
