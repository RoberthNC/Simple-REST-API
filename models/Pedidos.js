import mongoose, { mongo } from "mongoose";

const pedidosSchema = new mongoose.Schema({
    cliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Clientes",
    },
    pedido:[{
        producto:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Productos",
        },
        cantidad:{
            type:Number
        }
    }],
    total:{
        type:Number,
    }
});

const pedidosModel = mongoose.model("Pedidos", pedidosSchema);

export default pedidosModel;