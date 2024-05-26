const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const mongoConn = require('./databases/config');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));

mongoConn();

const tipoProyectos = require('./routes/tipoProyecto');;
const clientes = require('./routes/cliente');
const universidades = require('./routes/universidad');
const etapas = require('./routes/etapas');

// const marca = require('./routes/marca');
// const inventario = require('./routes/inventario');

// middlewares
app.use('/api/tiposproyectos', tipoProyectos);
app.use('/api/clientes', clientes);
app.use('/api/universidades', universidades);
app.use('/api/etapas', etapas);





module.exports = app;
