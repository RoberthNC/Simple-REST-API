import Pedidos from "../models/Pedidos.js";

const nuevoPedido = async(req,res)=>{
    try {
        const pedido = new Pedidos(req.body);
        await pedido.save();
        res.json({msg:"Se Agregó Nuevo Pedido"});
    } catch (error) {
        res.json({msg:error.response});
    }
}

const obtenerPedidos = async(req,res)=>{
    try {
        const pedidos = await Pedidos.find({}).populate("cliente").populate({
            path:"pedido.producto",
            model:"Productos"
        });
        res.json({"pedidos":pedidos});
    } catch (error) {
        res.json({msg:error.response});
    }
}

const obtenerPedidoPorId = async(req,res)=>{
    try {
        const { id } = req.params;
        const pedido = await Pedidos.findById(id);

        if(!pedido){
            return res.json({msg:"No Existe"});
        }
        res.json(pedido);
    } catch (error) {
        res.json({msg:error.response});
    }
}

const actualizarPedido = async(req,res)=>{
    try {
        const { id } = req.params;
        const pedido = await Pedidos.findByIdAndUpdate(id, req.body, {
            new:true
        });
        res.json(pedido);
    } catch (error) {
        res.json({msg:error.response});
    }
}

const eliminarPedido = async(req,res)=>{
    try {
        const { id } = req.params;
        await Pedidos.findOneAndDelete(id);
        res.json({msg:"Pedido Eliminado Correctamente"});
    } catch (error) {
        res.json({msg:error.response});
    }
}

export {
    nuevoPedido,
    obtenerPedidos,
    obtenerPedidoPorId,
    actualizarPedido,
    eliminarPedido
}