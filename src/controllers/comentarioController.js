import * as comentarioModel from '../models/comentarioModel.js';

export const createComentario = async (req, res) => {
  const { incidenciaId, contenido } = req.body;
  const usuarioId = req.user.id;

  try {
    const newId = await comentarioModel.createComentario(incidenciaId, usuarioId, contenido);
    res.status(201).json({ id: newId, mensaje: 'Comentario creado con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el comentario.' });
  }
};

export const getComentarios = async (req, res) => {
  const { incidenciaId } = req.params;
  try {
    const comentarios = await comentarioModel.getComentariosByIncidencia(incidenciaId);
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los comentarios.' });
  }
};
