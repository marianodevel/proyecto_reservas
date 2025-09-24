const Salon = require("../modelos/salon");

// BROWSE
const listar = async (req, res) => {
  try {
    const salones = await Salon.obtenerTodos();
    res.json(salones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
const obtener = async (req, res) => {
  try {
    const salon = await Salon.obtenerPorId(req.params.id);
    if (!salon) return res.status(404).json({ error: "Salón no encontrado" });
    res.json(salon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ADD
const crear = async (req, res) => {
  try {
    const id = await Salon.crear(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// EDIT
const actualizar = async (req, res) => {
  try {
    await Salon.actualizar(req.params.id, req.body);
    res.json({ mensaje: "Salón actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const eliminar = async (req, res) => {
  try {
    await Salon.eliminar(req.params.id);
    res.json({ mensaje: "Salón eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { listar, obtener, crear, actualizar, eliminar };
