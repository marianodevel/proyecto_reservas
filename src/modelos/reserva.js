const pool = require("../config/db");

const Reserva = {
  obtenerTodos: async () => {
    const [rows] = await pool.query("SELECT * FROM reservas WHERE activo = 1");
    return rows;
  },
  obtenerPorId: async (id) => {
    const [rows] = await pool.query(
      "SELECT * FROM reservas WHERE reserva_id = ? AND activo = 1",
      [id],
    );
    return rows[0];
  },
  crear: async (datos) => {
    const {
      fecha_reserva,
      salon_id,
      usuario_id,
      turno_id,
      foto_cumpleaniero,
      tematica,
      importe_salon,
      importe_total,
      activo = 1,
    } = datos;
    const [result] = await pool.query(
      "INSERT INTO reservas (fecha_reserva, salon_id, usuario_id, turno_id, foto_cumpleaniero, tematica, importe_salon, importe_total, activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        fecha_reserva,
        salon_id,
        usuario_id,
        turno_id,
        foto_cumpleaniero,
        tematica,
        importe_salon,
        importe_total,
        activo,
      ],
    );
    return result.insertId;
  },
  actualizar: async (id, datos) => {
    const {
      fecha_reserva,
      salon_id,
      usuario_id,
      turno_id,
      foto_cumpleaniero,
      tematica,
      importe_salon,
      importe_total,
      activo,
    } = datos;
    await pool.query(
      "UPDATE reservas SET fecha_reserva = ?, salon_id = ?, usuario_id = ?, turno_id = ?, foto_cumpleaniero = ?, tematica = ?, importe_salon = ?, importe_total = ?, activo = ? WHERE reserva_id = ?",
      [
        fecha_reserva,
        salon_id,
        usuario_id,
        turno_id,
        foto_cumpleaniero,
        tematica,
        importe_salon,
        importe_total,
        activo,
        id,
      ],
    );
  },
  eliminar: async (id) => {
    await pool.query("UPDATE reservas SET activo = 0 WHERE reserva_id = ?", [
      id,
    ]);
  },
};

module.exports = Reserva;
