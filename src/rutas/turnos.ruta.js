const express = require("express");
const router = express.Router();
const controlador = require("../controladores/turnos.controlador");
const authRoles = require("../middlewares/authorization.middleware");

// GET: Todos (Admin, Empleado, Cliente)
router.get("/", authRoles([1, 2, 3]), controlador.listar);
router.get("/:id", authRoles([1, 2, 3]), controlador.obtener);

// BREAD: Solo Admin y Empleado
router.post("/", authRoles([1, 2]), controlador.crear);
router.put("/:id", authRoles([1, 2]), controlador.actualizar);
router.delete("/:id", authRoles([1, 2]), controlador.eliminar);

module.exports = router;
