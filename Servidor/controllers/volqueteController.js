const Volquete = require("../models/Volquete")

/*
* Se obtienen todos los Servicios de Volquetes
*/
exports.obtenerServicios = async(req, res) => {
   try {
       let volquetes = await Volquete.find();
       res.status(200).send(volquetes);
   } catch (error) {
       console.log(error);
       res.status(500).send("Hubo un error al intentar recuperar las solicitudes...");
   }
}

/*
* Crea solicidu de volquete por medio de un método post,
* Recibiendo la info por el cuerpo de la request
*/
exports.crearSolicitudVolquete = async(req,res) => {
    try {
       let volquetes;
       volquetes = new Volquete(req.body);
       await volquetes.save();
       res.status(200).send(volquetes);
    } catch (error) {
       console.log(error)
       res.status(500).send("Hubo un error al crear la solicitud del volquete")
    }
 }

 /*
* Elimina la solicidu de volquete,
* Recibe como parametro de entrada el id de la solicitud a eliminar.
*/
 exports.eliminarSolicitudVolquete = async(req, res) => {
   try {
       let solicitudesVolquetes = await Volquete.findById(req.params.id);
       if(!solicitudesVolquetes){
           res.status(404).json("no existe la solicitud a eliminar");
       }
       await Volquete.findOneAndRemove({_id:req.params.id})
       res.status(200).json("La solicitud se eliminó con éxito");
   } catch (error) {
       console.log(error);
       res.status(500).send("Hubo un error al intentar elimiar la solicitud - E0005");
   }
}