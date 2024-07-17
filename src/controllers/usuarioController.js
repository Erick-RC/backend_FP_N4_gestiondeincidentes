import pool from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res) => {
  const { nombre, email, password, tipo } = req.body;
  console.log('Datos recibidos:', { nombre, email, password, tipo });

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Contraseña hasheada:', hashedPassword);

  try {
    const [result] = await pool.query('INSERT INTO Usuario (Nombre, Email, Contraseña, Tipo) VALUES (?, ?, ?, ?)', [nombre, email, hashedPassword, tipo]);
    console.log('Resultado de la consulta:', result);

    const token = jwt.sign({ id: result.insertId }, process.env.SECRET_KEY, { expiresIn: '2h' });
    console.log('Token generado:', token);

    res.status(201).json({ id: result.insertId, nombre, email, tipo, token });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ message: 'Error al crear el usuario.' });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  
  try {
    const [result] = await pool.query('SELECT ID, Nombre, Email, Tipo FROM Usuario WHERE ID = ?', [id]);
    if (result.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario.' });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, password, tipo } = req.body;
  const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

  try {
    const query = hashedPassword
      ? 'UPDATE Usuario SET Nombre = ?, Email = ?, Contraseña = ?, Tipo = ? WHERE ID = ?'
      : 'UPDATE Usuario SET Nombre = ?, Email = ?, Tipo = ? WHERE ID = ?';
    const params = hashedPassword ? [nombre, email, hashedPassword, tipo, id] : [nombre, email, tipo, id];

    const [result] = await pool.query(query, params);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.status(200).json({ message: 'Usuario actualizado con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario.' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM Usuario WHERE ID = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.status(200).json({ message: 'Usuario eliminado con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario.' });
  }
};
