import * as incidenciaModel from '../models/incidenciaModel.js';

export const createIncidencia = async (req, res) => {
  const { asunto, tipo, descripcion, estado } = req.body;
  const usuarioId = req.user.ID; // Obtener el ID del usuario autenticado

  try {
    const incidenciaId = await incidenciaModel.createIncidencia(usuarioId, asunto, tipo, descripcion, estado);
    res.status(201).json({ id: incidenciaId, mensaje: 'Incidencia creada con éxito.' });
  } catch (error) {
    console.error('Error al crear la incidencia:', error);
    res.status(500).json({ message: 'Error al crear la incidencia.' });
  }
};

export const getIncidencias = async (req, res) => {
  const filters = req.query;
  try {
    const incidencias = await incidenciaModel.getIncidencias(filters);
    res.status(200).json(incidencias);
  } catch (error) {
    console.error('Error al obtener las incidencias:', error);
    res.status(500).json({ message: 'Error al obtener las incidencias.' });
  }
};

export const updateIncidencia = async (req, res) => {
  const { id } = req.params;
  const { asunto, tipo, descripcion, estado } = req.body;

  console.log('Datos recibidos para actualizar:', { id, asunto, tipo, descripcion, estado });

  try {
    const affectedRows = await incidenciaModel.updateIncidencia(id, asunto, tipo, descripcion, estado);
    console.log('Filas afectadas:', affectedRows);

    if (affectedRows > 0) {
      // Leer la incidencia actualizada para verificar los cambios
      const updatedIncidencia = await incidenciaModel.getIncidenciaById(id);
      res.json({ message: 'Incidencia actualizada correctamente.', incidencia: updatedIncidencia });
    } else {
      res.status(404).json({ message: 'Incidencia no encontrada.' });
    }
  } catch (error) {
    console.error('Error al actualizar la incidencia:', error);
    res.status(500).json({ message: 'Error al actualizar la incidencia.' });
  }
};

export const getIncidenciaById = async (id) => {
  const [result] = await pool.query(
    'SELECT * FROM Incidencia WHERE ID = ?',
    [id]
  );
  return result[0]; // Devolvemos el primer resultado
};

export const deleteIncidencia = async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await incidenciaModel.deleteIncidencia(id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Incidencia no encontrada.' });
    }
    res.status(200).json({ message: 'Incidencia eliminada con éxito.' });
  } catch (error) {
    console.error('Error al eliminar la incidencia:', error);
    res.status(500).json({ message: 'Error al eliminar la incidencia.' });
  }
};
