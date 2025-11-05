const ServicioModelo = require("../modelos/servicio");

const ServicioServicio = {
  obtenerTodos: async () => {
    return await ServicioModelo.obtenerTodos();
  },

  obtenerPorId: async (id) => {
    return await ServicioModelo.obtenerPorId(id);
  },

  crear: async (datos) => {
    return await ServicioModelo.crear(datos);
  },

  actualizar: async (id, datos) => {
    return await ServicioModelo.actualizar(id, datos);
  },

  eliminar: async (id) => {
    return await ServicioModelo.eliminar(id);
  },
};

module.exports = ServicioServicio;
