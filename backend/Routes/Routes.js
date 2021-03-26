const express =require('express');
const router = express.Router();

const {verificarToken} = require('../Mid/Token');
const UsuarioRoutes = require('./UsuariosRoutes');
const NotasRoutes = require('./NotasRoutes')


router.post('/Usuarios/',UsuarioRoutes.Registrarusuario);
router.post('/Usuarios/Login/',UsuarioRoutes.LogearUsuario);
router.get('/Notastodos',verificarToken,NotasRoutes.Notastodos);
router.get('/Notas',verificarToken,NotasRoutes.MostarAll);
router.post('/Notas/Crear',verificarToken,NotasRoutes.Crear);
router.delete('/Notas/eliminar/',verificarToken,NotasRoutes.Eliminar),
router.put('/Notas/Compreto/',verificarToken,NotasRoutes.Compreto),

module.exports = router;