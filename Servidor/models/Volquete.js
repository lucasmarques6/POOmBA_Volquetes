const mongoose = require('mongoose');

const volqueteSchema = mongoose.Schema(
    {
        numero: {
            type: Number,
            required: true
        },
        cliente: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        tamaño: {
            type: String,
            required: true
        },
        chofer: {
            type: String,
            required: true
        },
        ubicacion: {
            type: String,
            required: true
        }

    }
)

module.exports = mongoose.model('Volquete', volqueteSchema)