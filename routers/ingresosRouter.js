const express = require('express');
const service = require('../services/ingresosServices');

const router = express.Router();

router.use(express.json());

//obtener todos los ingresos
router.get('/', service.find);

//buscar ingreso por codigo
router.get('/:id', service.findOne);

//crear ingreso
router.post('/', service.create);

//actualizar ingreso, buscando lo por código
router.patch('/:id', service.update);

//eliminar ingreso por código
router.delete('/:id', service.deletear);


module.exports = router;