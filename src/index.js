import express from 'express';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuarioRoutes.js';
import incidenciaRoutes from './routes/incidenciaRoutes.js';
import comentarioRoutes from './routes/comentarioRoutes.js';
import imagenRoutes from './routes/imagenRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/uploads', express.static('uploads'))

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/incidencias', incidenciaRoutes);
app.use('/api/comentarios', comentarioRoutes);
app.use('/api/imagenes', imagenRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
