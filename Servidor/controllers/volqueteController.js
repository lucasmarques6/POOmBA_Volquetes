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
* Elimina la solicitud de volquete,
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

//---------------OBTENER SERVICIO---------
exports.obtenerServicio = async(req, res) => {
    try {
        let volquete;
        volquete = await Volquete.findById(req.params.id);
        if(!volquete){
            res.status(404).json("No existe la solicitud de servicio volquete");
        }
        res.json(volquete);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error...');
    }
}

 /*
* Actualiza la solicidu de volquete,
* Recibe como parametro de entrada el id de la solicitud que se desea actualizar.
*/
exports.actualizarVolquete = async(req, res) => {
    try {
        const {numero,cliente,precio,cantidad,tamanio,chofer,ubicacion} = req.body;
        let solicitudVolquete = await Volquete.findById(req.params.id);
        if(!solicitudVolquete){
            res.json("No existe la solicitud que desea actualizar");
        }
        solicitudVolquete.numero = numero;
        solicitudVolquete.cliente = cliente;
        solicitudVolquete.precio = precio;
        solicitudVolquete.cantidad = cantidad;
        solicitudVolquete.tamanio = tamanio;
        solicitudVolquete.chofer = chofer;
        solicitudVolquete.ubicacion = ubicacion;

        solicitudVolquete = await Volquete.findOneAndUpdate({_id:req.params.id}, solicitudVolquete, {new: true});
        res.json(solicitudVolquete);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar la solicitud del volquete...");
    }
}


