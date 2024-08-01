import pool from '../config/db.js';

export const createIncidencia = async (usuarioId, asunto, tipo, descripcion, estado) => {
  console.log('Ejecutando query para crear incidencia:', { usuarioId, asunto, tipo, descripcion, estado });
  
  const [result] = await pool.query(
    'INSERT INTO Incidencia (Usuario_ID, Asunto, Tipo, Descripción, Estado, Fecha_creación, Fecha_actualización) VALUES (?, ?, ?, ?, ?, NOW(), NOW())',
    [usuarioId, asunto, tipo, descripcion, estado]
  );
  
  console.log('Resultado de la creación:', result);
  
  return result.insertId;
};

export const getIncidencias = async (filters) => {
  let query = 'SELECT * FROM Incidencia WHERE 1=1';
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

export const updateIncidencia = async (id, asunto, tipo, descripcion, estado) => {
  console.log('Ejecutando query para actualizar incidencia:', { id, asunto, tipo, descripcion, estado });

  const query = `
    UPDATE Incidencia
    SET Asunto = ?, Tipo = ?, Descripción = ?, Estado = ?, Fecha_actualización = NOW()
    WHERE ID = ?
  `;
  const params = [asunto, tipo, descripcion, estado, id];

  console.log('Query:', query);
  console.log('Params:', params);

  const [result] = await pool.query(query, params);

  console.log('Resultado de la actualización:', result);

  return result.affectedRows;
};

export const getIncidenciaById = async (id) => {
  const [result] = await pool.query(
    'SELECT * FROM Incidencia WHERE ID = ?',
    [id]
  );
  return result[0]; // Devolvemos el primer resultado
};