const express = require('express');
const service = require('../services/estudiantesServices');

const router = express.Router();

router.use(express.json());

//obtener todos los usuarios
router.get('/', service.find);

//buscar usuario por codigo
router.get('/:codigo', service.findOne);

//crear usuario
router.post('/', service.create);

//actualizar usuario, buscando lo por código
router.patch('/:codigo', service.update);

//eliminar usuario por código
router.delete('/:codigo', service.deletear);


module.exports = router;