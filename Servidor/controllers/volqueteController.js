const Volquete = require("../models/Volquete")

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