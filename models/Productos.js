import mongoose from "mongoose";

const productosSchema = mongoose.Schema({
    nombre:{
        type:String,
        trim:true,
    },
    precio:{
        type:Number,
    },
    imagen:{
        type:String,
    },
});

const productosModel = mongoose.model("Productos", productosSchema);

export default productosModel;