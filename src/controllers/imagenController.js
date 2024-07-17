import pool from '../config/db.js';

export const createImagen = async (req, res) => {
  const { incidenciaId } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'No se proporcionó una imagen.' });
  }

  const url = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;

  try {
    const [result] = await pool.query('INSERT INTO Imagen (Incidencia_ID, URL) VALUES (?, ?)', [incidenciaId, url]);
    res.status(201).json({ id: result.insertId, url, mensaje: 'Imagen subida con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al subir la imagen.' });
  }
};

export const getImagenesByIncidencia = async (req, res) => {
  const { incidenciaId } = req.params;

  try {
    const [result] = await pool.query('SELECT * FROM Imagen WHERE Incidencia_ID = ?', [incidenciaId]);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las imágenes.' });
  }
};
