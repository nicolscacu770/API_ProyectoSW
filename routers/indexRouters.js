const express = require('express');
const estudiantesRouter = require('./estudiantesRouter');
const docentesRouter = require('./docentesRouter');
const usuariosRouter = require('./usuariosRouter');
const encuentrosRouter = require('./encuentrosRouter');
const ingresosRouter = require('./ingresosRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/usuarios/estudiantes', estudiantesRouter);
    router.use('/usuarios/docentes', docentesRouter);
    router.use('/usuarios', usuariosRouter);
    router.use('/encuentros', encuentrosRouter);
    router.use('/ingresos', ingresosRouter);
}

module.exports = routerApi;