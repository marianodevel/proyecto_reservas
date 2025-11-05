const ReservaModelo = require("../modelos/reserva");

const ReservaServicio = {
  obtenerTodos: async () => {
    return await ReservaModelo.obtenerTodos();
  },

  obtenerPorId: async (id) => {
    return await ReservaModelo.obtenerPorId(id);
  },

  crear: async (datos) => {
    // Aquí (en un futuro) se calcularía el importe_total
    // o se verificaría la disponibilidad del turno.
    return await ReservaModelo.crear(datos);
  },

  actualizar: async (id, datos) => {
    return await ReservaModelo.actualizar(id, datos);
  },

  eliminar: async (id) => {
    return await ReservaModelo.eliminar(id);
  },
};

module.exports = ReservaServicio;
