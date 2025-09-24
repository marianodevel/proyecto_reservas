const express = require("express");
const router = express.Router();
const controlador = require("../controladores/salones.controlador");

// Browse
router.get("/", controlador.listar);

// Read
router.get("/:id", controlador.obtener);

// Add
router.post("/", controlador.crear);

// Edit
router.put("/:id", controlador.actualizar);

// Delete
router.delete("/:id", controlador.eliminar);

module.exports = router;
