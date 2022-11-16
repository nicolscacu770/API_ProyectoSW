const express = require('express');
const service = require('../services/encuentrosServices');

const router = express.Router();

router.use(express.json());

//obtener todos los encuentros
router.get('/', service.find);

//buscar encuentro por codigo
router.get('/:id', service.findOne);

//crear encuentro
router.post('/', service.create);

//actualizar encuentro, buscando lo por código
router.patch('/:id', service.update);

//eliminar encuentro por código
router.delete('/:id', service.deletear);


module.exports = router;