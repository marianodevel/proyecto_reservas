const TurnoModelo = require("../modelos/turno");

const TurnoServicio = {
  obtenerTodos: async () => {
    return await TurnoModelo.obtenerTodos();
  },

  obtenerPorId: async (id) => {
    return await TurnoModelo.obtenerPorId(id);
  },

  crear: async (datos) => {
    return await TurnoModelo.crear(datos);
  },

  actualizar: async (id, datos) => {
    return await TurnoModelo.actualizar(id, datos);
  },

  eliminar: async (id) => {
    return await TurnoModelo.eliminar(id);
  },
};

module.exports = TurnoServicio;
