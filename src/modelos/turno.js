const pool = require("../config/db");

const Turno = {
  obtenerTodos: async () => {
    const [rows] = await pool.query("SELECT * FROM turnos WHERE activo = 1");
    return rows;
  },
  obtenerPorId: async (id) => {
    const [rows] = await pool.query(
      "SELECT * FROM turnos WHERE turno_id = ? AND activo = 1",
      [id],
    );
    return rows[0];
  },
  crear: async (datos) => {
    const { orden, hora_desde, hora_hasta, activo = 1 } = datos;
    const [result] = await pool.query(
      "INSERT INTO turnos (orden, hora_desde, hora_hasta, activo) VALUES (?, ?, ?, ?)",
      [orden, hora_desde, hora_hasta, activo],
    );
    return result.insertId;
  },
  actualizar: async (id, datos) => {
    const { orden, hora_desde, hora_hasta, activo } = datos;
    await pool.query(
      "UPDATE turnos SET orden = ?, hora_desde = ?, hora_hasta = ?, activo = ? WHERE turno_id = ?",
      [orden, hora_desde, hora_hasta, activo, id],
    );
  },
  eliminar: async (id) => {
    await pool.query("UPDATE turnos SET activo = 0 WHERE turno_id = ?", [id]);
  },
};

module.exports = Turno;
