## Diagrama Entidad Relacional
![image](https://github.com/user-attachments/assets/d411bb58-343c-4487-87f6-5f2b5c3bba62)
## Guía de Rutas de la API ##
Autenticación
## Registro de Usuario
Ruta: /api/usuarios
Método: POST
Descripción: Crea un nuevo usuario.
Cuerpo de la solicitud:
{
  "nombre": "Nombre del Usuario",
  "email": "email@example.com",
  "password": "contraseña123",
  "tipo": "residente"
}
Respuesta exitosa (201):
{
  "id": 1,
  "nombre": "Nombre del Usuario",
  "email": "email@example.com",
  "tipo": "residente",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
## Login de Usuario
Ruta: /api/usuarios/login
Método: POST
Descripción: Autentica a un usuario y devuelve un token JWT.
Cuerpo de la solicitud:
{
  "email": "email@example.com",
  "password": "contraseña123"
}
Respuesta exitosa (200):
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidGlwbyI6InJlc2lkZW50ZSIsImlhdCI6MTcyMjU4NDI3MSwiZXhwIjoxNzIyNTg3ODcxfQ.-cim_xXxVtHfAXbpvAovpuwTLwGkDDiZoWKZO6-OnWs",
  "tipo": "residente",
  "id": 8
}
## Gestión de Usuarios
Obtener Usuario por ID
Ruta: /api/usuarios/:id
Método: GET
Descripción: Obtiene la información de un usuario por su ID.
Encabezado: Authorization: Bearer <tu_token>
Respuesta exitosa (200):
{
  "ID": 1,
  "Nombre": "Nombre del Usuario",
  "Email": "email@example.com",
  "Tipo": "residente"
}
## Actualizar Usuario
Ruta: /api/usuarios/:id
Método: PUT
Descripción: Actualiza la información de un usuario por su ID.
Encabezado: Authorization: Bearer <tu_token>
Cuerpo de la solicitud:
{
  "nombre": "Nombre Actualizado",
  "email": "email_actualizado@example.com",
  "password": "nueva_contraseña123",
  "tipo": "administrador"
}
Respuesta exitosa (200):
{
  "message": "Usuario actualizado con éxito."
}
## Eliminar Usuario
Ruta: /api/usuarios/:id
Método: DELETE
Descripción: Elimina un usuario por su ID.
Encabezado: Authorization: Bearer <tu_token>
Respuesta exitosa (200):
{
  "message": "Usuario eliminado con éxito."
}
## Gestión de Incidencias
Crear Incidencia
Ruta: /api/incidencias
Método: POST
Descripción: Crea una nueva incidencia.
Encabezado: Authorization: Bearer <tu_token>
Cuerpo de la solicitud:
{
  "asunto": "Asunto de la Incidencia",
  "tipo": "Tipo de Incidencia",
  "descripcion": "Descripción detallada de la incidencia",
  "estado": "Estado de la Incidencia"
}
Respuesta exitosa (201):
{
  "id": 1,
  "mensaje": "Incidencia creada con éxito."
}
## Obtener Incidencias
Ruta: /api/incidencias
Método: GET
Descripción: Obtiene todas las incidencias, con soporte para filtrado avanzado.
Parámetros de consulta (opcional): estado, fecha, etc.
Respuesta exitosa (200):
[
  {
    "ID": 1,
    "Usuario_ID": 1,
    "Asunto": "Asunto de la Incidencia",
    "Tipo": "Tipo de Incidencia",
    "Descripcion": "Descripción detallada de la incidencia",
    "Estado": "Resuelta"
  }
]
## Actualizar Incidencia
Ruta: /api/incidencias/:id
Método: PUT
Descripción: Actualiza una incidencia por su ID.
Encabezado: Authorization: Bearer <tu_token>
Cuerpo de la solicitud:
{
  "asunto": "Asunto Actualizado",
  "tipo": "Tipo Actualizado",
  "descripcion": "Descripción Actualizada",
  "estado": "Estado Actualizado"
}
Respuesta exitosa (200):
{
  "message": "Incidencia actualizada con éxito."
}
## Eliminar Incidencia
Ruta: /api/incidencias/:id
Método: DELETE
Descripción: Elimina una incidencia por su ID.
Encabezado: Authorization: Bearer <tu_token>
Respuesta exitosa (200):
{
  "message": "Incidencia eliminada con éxito."
}
## Gestión de Imágenes
Subir Imagen
Ruta: /api/imagenes
Método: POST
Descripción: Sube una imagen para una incidencia.
Encabezado: Authorization: Bearer <tu_token>
Cuerpo de la solicitud: Formulario con el campo imagen.
Respuesta exitosa (201):
{
  "message": "Imagen subida con éxito."
}
## Obtener Imágenes de una Incidencia
Ruta: /api/imagenes/:incidenciaId
Método: GET
Descripción: Obtiene todas las imágenes asociadas a una incidencia.
Respuesta exitosa (200):
[
  {
    "ID": 1,
    "Incidencia_ID": 1,
    "URL": "http://example.com/imagen1.jpg"
  }
]
## Gestión de Comentarios
Crear Comentario
Ruta: /api/comentarios
Método: POST
Descripción: Crea un comentario en una incidencia.
Encabezado: Authorization: Bearer <tu_token>
Cuerpo de la solicitud:
{
  "incidenciaId": 1,
  "contenido": "Contenido del comentario"
}
Respuesta exitosa (201):
{
  "id": 1,
  "mensaje": "Comentario creado con éxito."
}
## Obtener Comentarios de una Incidencia
Ruta: /api/comentarios/:incidenciaId
Método: GET
Descripción: Obtiene todos los comentarios de una incidencia.
Respuesta exitosa (200):
[
  {
    "ID": 1,
    "Incidencia_ID": 1,
    "Usuario_ID": 1,
    "Contenido": "Contenido del comentario",
    "Fecha": "2024-01-01T00:00:00.000Z"
  }
]
