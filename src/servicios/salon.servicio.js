const SalonModelo = require("../modelos/salon");

const SalonServicio = {
  obtenerTodos: async () => {
    return await SalonModelo.obtenerTodos();
  },

  obtenerPorId: async (id) => {
    return await SalonModelo.obtenerPorId(id);
  },

  crear: async (datos) => {
    return await SalonModelo.crear(datos);
  },

  actualizar: async (id, datos) => {
    return await SalonModelo.actualizar(id, datos);
  },

  eliminar: async (id) => {
    return await SalonModelo.eliminar(id);
  },
};

module.exports = SalonServicio;
