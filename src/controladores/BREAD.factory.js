const BREADControlador = (Servicio, nombreEntidad) => {
  // BROWSE
  const listar = async (req, res) => {
    try {
      const items = await Servicio.obtenerTodos();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // READ
  const obtener = async (req, res) => {
    try {
      const item = await Servicio.obtenerPorId(req.params.id);
      if (!item) {
        return res
          .status(404)
          .json({ error: `${nombreEntidad} no encontrado` });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // ADD
  const crear = async (req, res) => {
    try {
      const id = await Servicio.crear(req.body);
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // EDIT
  const actualizar = async (req, res) => {
    try {
      await Servicio.actualizar(req.params.id, req.body);
      res.json({ mensaje: `${nombreEntidad} actualizado` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // DELETE
  const eliminar = async (req, res) => {
    try {
      await Servicio.eliminar(req.params.id);
      res.json({ mensaje: `${nombreEntidad} eliminado` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  return { listar, obtener, crear, actualizar, eliminar };
};

module.exports = BREADControlador;
