import express from "express";
import {
    nuevoPedido,
    obtenerPedidos,
    obtenerPedidoPorId,
    actualizarPedido,
    eliminarPedido
} from "../controllers/pedidosController.js";

const router = express.Router();

router.post("/pedidos", nuevoPedido);
router.get("/pedidos", obtenerPedidos);
router.get("/pedidos/:id", obtenerPedidoPorId);
router.put("/pedidos/:id", actualizarPedido);
router.delete("/pedidos/:id", eliminarPedido);

export default router;