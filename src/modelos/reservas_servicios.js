const pool = require("../config/db");

const ReservaServicio = {
  obtenerTodos: async () => {
    const [rows] = await pool.query("SELECT * FROM reservas_servicios");
    return rows;
  },
  obtenerPorId: async (id) => {
    const [rows] = await pool.query(
      "SELECT * FROM reservas_servicios WHERE reserva_servicio_id = ?",
      [id],
    );
    return rows[0];
  },
  crear: async (datos) => {
    const { reserva_id, servicio_id, importe } = datos;
    const [result] = await pool.query(
      "INSERT INTO reservas_servicios (reserva_id, servicio_id, importe) VALUES (?, ?, ?)",
      [reserva_id, servicio_id, importe],
    );
    return result.insertId;
  },
  actualizar: async (id, datos) => {
    const { reserva_id, servicio_id, importe } = datos;
    await pool.query(
      "UPDATE reservas_servicios SET reserva_id = ?, servicio_id = ?, importe = ? WHERE reserva_servicio_id = ?",
      [reserva_id, servicio_id, importe, id],
    );
  },
  eliminar: async (id) => {
    // CAMBIO IMPORTANTE: Es un borrado físico (no hay campo 'activo')
    await pool.query(
      "DELETE FROM reservas_servicios WHERE reserva_servicio_id = ?",
      [id],
    );
  },
};

module.exports = ReservaServicio;
