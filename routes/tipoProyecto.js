const { Router } = require('express');
const { 
    createTipoProyecto, 
    getTipoProyectos,
    updateTipoProyectoByID 
} = require('../controllers/tipoProyecto');

const router = Router();

// Crear
router.post('/', createTipoProyecto);

// Consultar todos
router.get('/', getTipoProyectos);

// Actualizar por ID
router.put('/:id', updateTipoProyectoByID);

module.exports = router;
