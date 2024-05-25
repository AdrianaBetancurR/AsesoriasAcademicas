const Etapa = require('../models/etapa');
const { request, response } = require('express');

// Crear etapa
const createEtapa = async (req = request, res = response) => {
    try {
        const data = req.body;
        const etapa = new Etapa(data);

        await etapa.save();

        return res.status(201).json(etapa);
    } catch (e) {
        return res.status(500).json({
            msj: e.message
        });
    }
};

// Obtener todas las etapas
const getEtapas = async (req = request, res = response) => {
    try {
        const etapas = await Etapa.find();
        return res.json(etapas);
    } catch (e) {
        return res.status(500).json({
            msj: e.message
        });
    }
};

// Actualizar etapa por ID
const updateEtapaByID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const { nombre } = req.body;

        const data = { 
            nombre,
            fechaActualizacion: new Date() 
        };

        const etapa = await Etapa.findByIdAndUpdate(id, data, { new: true });

        return res.status(201).json(etapa);
    } catch (e) {
        return res.status(500).json({
            msj: e.message
        });
    }
};

module.exports = {
    createEtapa,
    getEtapas,
    updateEtapaByID
};
