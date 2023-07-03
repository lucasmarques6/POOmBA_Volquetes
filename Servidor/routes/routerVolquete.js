const express = require('express');
const routerVolquete = express.Router();
const volqueteController = require('../controllers/volqueteController');

routerVolquete.get('/', volqueteController.obtenerServicios);
routerVolquete.get('/:id', volqueteController.obtenerServicio);
routerVolquete.post('/', volqueteController.crearSolicitudVolquete);
routerVolquete.delete('/:id', volqueteController.eliminarSolicitudVolquete);
routerVolquete.put('/:id', volqueteController.actualizarVolquete);

module.exports = routerVolquete;