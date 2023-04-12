import Productos from "../models/Productos.js";

const nuevoProducto = async(req,res)=>{
    try {
        const productoNuevo = new Productos(req.body);
        await productoNuevo.save();
        res.json({msg:"Producto Creado Correctamente"});
    } catch (error) {
        res.json({msg:error.response});
    }
}

const obtenerProductos = async(req,res)=>{
    try {
        const productos = await Productos.find({});
        res.json({msg:productos});
    } catch (error) {
        res.json({msg:error.response});
    }
}

const obtenerProductoPorId = async(req,res)=>{
    try {
        const { id } = req.params;
        const producto = await Productos.findById(id);
        res.json(producto);
    } catch (error) {
        res.json({msg:error.response});
    }
}

const actualizarProducto = async(req,res)=>{
    try {
        const { id } = req.params;
        const producto = await Productos.findById(id);
        producto.precio = 75;
        await producto.save();
        res.json({msg:"Producto Actualizado Correctamente"});
    } catch (error) {
        res.json({msg:error.response});
    }
}

const eliminarProducto = async(req,res)=>{
    try {
        const { id } = req.params;
        await Productos.findByIdAndDelete(id);
        res.json({msg:"Producto Eliminado Correctamente"});
    } catch (error) {
        res.json({msg:error.response});
    }
}

export {
    nuevoProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
}