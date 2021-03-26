const express =require('express');
const UsuarioRoutes = express.Router();
const UsuarioController=require('../Controllers/UsuariosController');


UsuarioRoutes.Registrarusuario=(UsuarioController.PostUsuarios);
UsuarioRoutes.LogearUsuario=(UsuarioController.PostLoginUsuario);

module.exports = UsuarioRoutes;