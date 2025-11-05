const express = require("express");
const router = express.Router();
const controlador = require("../controladores/usuarios.controlador");
const authRoles = require("../middlewares/authorization.middleware");

// GET: Admin y Empleado
router.get("/", authRoles([1, 2]), controlador.listar);
router.get("/:id", authRoles([1, 2]), controlador.obtener);

// BREAD: Solo Admin
router.post("/", authRoles([1]), controlador.crear);
router.put("/:id", authRoles([1]), controlador.actualizar);
router.delete("/:id", authRoles([1]), controlador.eliminar);

module.exports = router;
