import express from "express";
import router from "./routes/productosRoutes.js";
import mongoose from "mongoose";

//Conexión de manera local
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapis",{
    useNewUrlParser: true
});

const app = express();

app.use(express.json());
app.use("/", router);

app.listen(4000,()=>{
    console.log("Corriendo en el puerto 4000");
});