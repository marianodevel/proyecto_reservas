const ReservaServicio = require("../servicios/reservas_servicios.servicio");

// BROWSE
const listar = async (req, res) => {
  try {
    const items = await ReservaServicio.obtenerTodos();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
const obtener = async (req, res) => {
  try {
    const item = await ReservaServicio.obtenerPorId(req.params.id);
    if (!item) {
      return res
        .status(44)
        .json({ error: "Registro de Reserva-Servicio no encontrado" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ADD
const crear = async (req, res) => {
  try {
    const id = await ReservaServicio.crear(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// EDIT
const actualizar = async (req, res) => {
  try {
    await ReservaServicio.actualizar(req.params.id, req.body);
    res.json({ mensaje: "Registro de Reserva-Servicio actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const eliminar = async (req, res) => {
  try {
    await ReservaServicio.eliminar(req.params.id);
    res.json({ mensaje: "Registro de Reserva-Servicio eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { listar, obtener, crear, actualizar, eliminar };
