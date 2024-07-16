import * as imagenModel from '../models/imagenModel.js';

export const createImagen = async (req, res) => {
  const { incidenciaId, url } = req.body;

  try {
    const newId = await imagenModel.createImagen(incidenciaId, url);
    res.status(201).json({ id: newId, mensaje: 'Imagen creada con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la imagen.' });
  }
};

export const getImagenes = async (req, res) => {
  const { incidenciaId } = req.params;
  try {
    const imagenes = await imagenModel.getImagenesByIncidencia(incidenciaId);
    res.status(200).json(imagenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las imágenes.' });
  }
};
