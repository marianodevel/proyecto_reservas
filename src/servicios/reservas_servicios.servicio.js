const ReservaServicioModelo = require("../modelos/reservas_servicios");

const ReservaServicioServicio = {
  obtenerTodos: async () => {
    return await ReservaServicioModelo.obtenerTodos();
  },

  obtenerPorId: async (id) => {
    return await ReservaServicioModelo.obtenerPorId(id);
  },

  crear: async (datos) => {
    return await ReservaServicioModelo.crear(datos);
  },

  actualizar: async (id, datos) => {
    return await ReservaServicioModelo.actualizar(id, datos);
  },

  eliminar: async (id) => {
    return await ReservaServicioModelo.eliminar(id);
  },
};

module.exports = ReservaServicioServicio;
