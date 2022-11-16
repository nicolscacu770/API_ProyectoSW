const express = require('express');
const routerApi = require('./routers/indexRouters');
const app = express();
const {PORT} = require('./config');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API REST página para el control de laboratorios de fisica y electrónica de la UPTC seccional Sogamoso');
});

routerApi(app);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint no encontrado'
    })
})

//indicando el puerto al que debe escuchar la app
app.listen(PORT, () => {
    console.log('server running en el port: ' + PORT);
})