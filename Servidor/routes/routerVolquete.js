const express = require('express');
const routerVolquete = express.Router();
const volqueteController = require('../controllers/volqueteController')

routerVolquete.post('/', volqueteController.crearSolicitudVolquete);


module.exports = routerVolquete;