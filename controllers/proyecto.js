const Proyecto = require('../models/proyecto');
const { request, response } = require('express');

// Crear proyecto
const createProyecto = async (req = request, res = response) => {
    try {
        const data = req.body;
        const proyecto = new Proyecto(data);

        await proyecto.save();

        return res.status(201).json(proyecto);
    } catch (e) {
        return res.status(500).json({
            msj: e.message
        });
    }
};

// Obtener todos los proyectos
const getProyectos = async (req = request, res = response) => {
    try {
        const proyectos = await Proyecto.find().populate('cliente tipoProyecto universidad etapa');
        return res.json(proyectos);
    } catch (e) {
        return res.status(500).json({
            msj: e.message
        });
    }
};

// Actualizar proyecto por ID
const updateProyectoByID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const data = req.body;
        data.fechaActualizacion = new Date();

        const proyecto = await Proyecto.findByIdAndUpdate(id, data, { new: true }).populate('cliente tipoProyecto universidad etapa');

        return res.status(201).json(proyecto);
    } catch (e) {
        return res.status(500).json({
            msj: e.message
        });
    }
};

module.exports = {
    createProyecto,
    getProyectos,
    updateProyectoByID
};
