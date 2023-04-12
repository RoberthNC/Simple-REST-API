import Clientes from "../models/Clientes.js";

const nuevoCliente = async(req,res)=>{
    try {
        const cliente = new Clientes(req.body);
        await cliente.save();
        res.json({msg:"Se agregó un nuevo cliente"});
    } catch (error) {
        res.json({msg:error.response});
    }
}

const obtenerClientes = async(req,res)=>{
     try {
        const clientes = await Clientes.find({});
        res.json(clientes);   
    } catch (error) {
        res.json({msg:error.response});
    }
}

const obtenerClientePorId = async(req,res)=>{
    try {
        const { id } = req.params;
        const cliente = await Clientes.findById(id);
        if(!cliente){
            res.status(404).json({msg:"No Existe"});
        }
        res.json(cliente);
    } catch (error) {
        res.json({msg:error.response});
    }
}

const actualizarCliente = async(req,res)=>{
    try {
        const { id } = req.params;
        const cliente = await Clientes.findById(id);
        cliente.empresa = "Microsoft";
        cliente.save();
        res.json({"Cliente Actualizado":cliente});
    } catch (error) {
        res.json({msg:error.response});
    }
}

const eliminarCliente = async(req,res)=>{
    try {
        const { id } = req.params;
        await Clientes.findOneAndDelete({_id:id});
        res.json({msg:"Cliente Eliminado Correctamente"});
    } catch (error) {
        res.json({msg:error.response});
    }
}

export {
    nuevoCliente,
    obtenerClientes,
    obtenerClientePorId,
    actualizarCliente,
    eliminarCliente
}