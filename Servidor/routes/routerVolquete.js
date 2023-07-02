const express = require('express');
const routerVolquete = express.Router();
const volqueteController = require('../controllers/volqueteController');

routerVolquete.get('/', volqueteController.obtenerServicios);
routerVolquete.get('/:id', volqueteController.obtenerServicio);
routerVolquete.post('/', volqueteController.crearSolicitudVolquete);
routerVolquete.delete('/:id', volqueteController.eliminarSolicitudVolquete);


module.exports = routerVolquete;