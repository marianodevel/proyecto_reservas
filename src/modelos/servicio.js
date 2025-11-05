const pool = require("../config/db");

const Servicio = {
  obtenerTodos: async () => {
    const [rows] = await pool.query("SELECT * FROM servicios WHERE activo = 1");
    return rows;
  },
  obtenerPorId: async (id) => {
    const [rows] = await pool.query(
      "SELECT * FROM servicios WHERE servicio_id = ? AND activo = 1",
      [id],
    );
    return rows[0];
  },
  crear: async (datos) => {
    const { descripcion, importe, activo = 1 } = datos;
    const [result] = await pool.query(
      "INSERT INTO servicios (descripcion, importe, activo) VALUES (?, ?, ?)",
      [descripcion, importe, activo],
    );
    return result.insertId;
  },
  actualizar: async (id, datos) => {
    const { descripcion, importe, activo } = datos;
    await pool.query(
      "UPDATE servicios SET descripcion = ?, importe = ?, activo = ? WHERE servicio_id = ?",
      [descripcion, importe, activo, id],
    );
  },
  eliminar: async (id) => {
    await pool.query("UPDATE servicios SET activo = 0 WHERE servicio_id = ?", [
      id,
    ]);
  },
};

module.exports = Servicio;
