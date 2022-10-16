import express from 'express';
import route from './routes/index.js';

const app = express();
const port = process.env.PORT || 4000;

//habilitar pug
app.set("view engine","pug");

//habilitar carpeta estatica
app.use(express.static('public'));

//habilitar rutas

app.use("/",route);




app.listen(port, ()=>{
 console.log(`El servidor está funcionando en el puerto ${port}`)
});

