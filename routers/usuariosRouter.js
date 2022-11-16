const express = require('express');
const service = require('../services/usuariosServices');

const router = express.Router();

router.use(express.json());

//obtener todos los usuarios
router.get('/', service.find);

//buscar usuario por correo
router.get('/:correo', service.findOne);

module.exports = router;