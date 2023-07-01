const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config( {path:'variables.env'} )

const conectarDB = async () => {
    try{
        await mongoose.connect(process.env.DB_MONGO)
        console.log("BD conectada correcatamente");
    }
    catch (err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = conectarDB; 