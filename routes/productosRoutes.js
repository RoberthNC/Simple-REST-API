import express from "express";
import { 
    nuevoProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
} from "../controllers/productosController.js";

const router = express.Router();

router.post("/productos", nuevoProducto);
router.get("/productos", obtenerProductos);
router.get("/productos/:id", obtenerProductoPorId);
router.put("/productos/:id", actualizarProducto);
router.delete("/productos/:id", eliminarProducto);

export default router;