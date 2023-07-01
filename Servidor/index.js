const express = require('express');
const PORT = 3000;
const app = express();
routerVolquete = require('./routes/routerVolquete');
const conectarDB = require('./config/db');
const cors = require('cors')
//conecta la base de datos
conectarDB();

app.use(cors());

//para trabajar con json
app.use(express.json());

//app.use('/api/volquetes', routerVolquete);

app.get('/', (req,res) => { res.send("Servidor CRUD Volquetes 200😒") });

app.listen(PORT, () => {
    console.log(`El servidor se esta escuchando en el puerto ${PORT}`)
});
