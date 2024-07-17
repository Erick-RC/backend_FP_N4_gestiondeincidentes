Rutas de la APi
## 1. Creación de Usuario
## POST /api/usuarios
Cuerpo (Body) json
{
  "nombre": "Juan Pérez",
  "email": "juan.perez@example.com",
  "password": "password123",
  "tipo": "residente"
}
Respuesta esperada 
{
  "id": 1,
  "nombre": "Juan Pérez",
  "email": "juan.perez@example.com",
  "tipo": "residente",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIxMTc2ODEwLCJleHAiOjE3MjExODA0MTB9.TXMrRusrzcljsAYPmo7FPw0PJoLsL3l7JpgBTHOW2ho"
}
## DELETE /api/usuarios/id
Respuesta esperada {
  "message": "Usuario eliminado con éxito."
}
## GET /api/usuarios/id
Respuesta esperada {
  "ID": 4,
  "Nombre": "Erick Rabago",
  "Email": "erick.rabago@example.com",
  "Tipo": "residente"
}
## PUT /api/usuarios/id
cuerpo Json
{
  "nombre": "Erick Rabago",
  "email": "erick.rabago@example.com",
  "password": "password123",
  "tipo": "administrador"
} 
Respuesta esperada {
  "message": "Usuario actualizado con éxito."
}