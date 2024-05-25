const Cliente = require('../models/cliente');
const { request, response } = require('express');

// Crear cliente
const createCliente = async (req = request, res = response) => {
    try {
        const data = req.body;
        const cliente = new Cliente(data);

        await cliente.save();

        return res.status(201).json(cliente);
    } catch (e) {
        return res.status(500).json({
            msj: e.message
        });
    }
};

// Obtener todos los clientes
const getClientes = async (req = request, res = response) => {
    try {
        const clientes = await Cliente.find();
        return res.json(clientes);
    } catch (e) {
        return res.status(500).json({
            msj: e.message
        });
    }
};

// Actualizar cliente por ID
const updateClienteByID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const { nombre, email } = req.body;

        const data = { 
            nombre, 
            email,
            fechaActualizacion: new Date() 
        };

        const cliente = await Cliente.findByIdAndUpdate(id, data, { new: true });

        return res.status(201).json(cliente);
    } catch (e) {
        return res.status(500).json({
            msj: e.message
        });
    }
};

module.exports = {
    createCliente,
    getClientes,
    updateClienteByID
};
