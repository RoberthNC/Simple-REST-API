import express from "express";
import { 
    nuevoCliente, 
    obtenerClientes, 
    obtenerClientePorId,
    actualizarCliente,
    eliminarCliente 
} from "../controllers/clientesController.js";

const router = express.Router();

router.get("/clientes", obtenerClientes);
router.get("/clientes/:id", obtenerClientePorId);
router.post("/clientes", nuevoCliente);
router.put("/clientes/:id", actualizarCliente);
router.delete("/clientes/:id", eliminarCliente);

export default router;