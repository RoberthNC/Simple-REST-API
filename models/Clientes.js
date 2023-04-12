import mongoose from "mongoose";

const clientesSchema = new mongoose.Schema({
    nombre:{
        type:String,
        trim:true,
    },
    apellido:{
        type:String,
        trim:true,
    },
    empresa:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
    },
    telefono:{
        type:String,
        trim:true,
    },
});

const clientesModel = mongoose.model("Clientes", clientesSchema);

export default clientesModel;