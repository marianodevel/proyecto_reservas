const express = require("express");
const router = express.Router();
const controlador = require("../controladores/reservas.controlador");
const authRoles = require("../middlewares/authorization.middleware");

// GET: Todos (Admin, Empleado, Cliente)
router.get("/", authRoles([1, 2, 3]), controlador.listar);
router.get("/:id", authRoles([1, 2, 3]), controlador.obtener);

// POST: Admin y Cliente
router.post("/", authRoles([1, 3]), controlador.crear);

// PUT/DELETE: Solo Admin
router.put("/:id", authRoles([1]), controlador.actualizar);
router.delete("/:id", authRoles([1]), controlador.eliminar);

module.exports = router;
