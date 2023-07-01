const Volquete = require("../models/Volquete")

exports.crearSolicitudVolquete = async(req,res) => {
    try {
       let volquete;
       volquete = new Volquete(req.body);
       await volquete.save();
       res.status(200).send(volquete);
    } catch (error) {
       console.log(error)
       res.status(500).send("Hubo un error al crear la solicitud del volquete")
    }
 }