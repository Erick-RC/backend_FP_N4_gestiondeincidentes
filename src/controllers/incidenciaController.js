import * as incidenciaModel from '../models/incidenciaModel.js';

export const createIncidencia = async (req, res) => {
  const { asunto, tipo, descripcion, estado } = req.body;
  const usuario = req.user; // Obtener el usuario del middleware de autenticación

  try {
    const newId = await incidenciaModel.createIncidencia(usuario.id, asunto, tipo, descripcion, estado);
    res.status(201).json({ id: newId, mensaje: 'Incidencia creada con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la incidencia.' });
  }
};


export const getIncidencias = async (req, res) => {
  const filters = req.query;
  try {
    const incidencias = await incidenciaModel.getIncidencias(filters);
    res.status(200).json(incidencias);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las incidencias.' });
  }
};

export const updateIncidencia = async (req, res) => {
  const { id } = req.params;
  const { asunto, tipo, descripcion, estado } = req.body;

  try {
    const affectedRows = await incidenciaModel.updateIncidencia(id, asunto, tipo, descripcion, estado);
    if (affectedRows > 0) {
      res.json({ message: 'Incidencia actualizada correctamente.' });
    } else {
      res.status(404).json({ message: 'Incidencia no encontrada.' });
    }
  } catch (error) {
    console.error('Error al actualizar la incidencia:', error);
    res.status(500).json({ message: 'Error al actualizar la incidencia.' });
  }
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
    res.status(500).json({ message: 'Error al eliminar la incidencia.' });
  }
};
