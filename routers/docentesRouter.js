const express = require('express');
const service = require('../services/docentesServices');

const router = express.Router();

router.use(express.json());

//obtener todos los usuarios
router.get('/', service.find);

//buscar usuario por codigo
router.get('/:codigo', service.findOne);

module.exports = router;