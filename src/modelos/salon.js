const pool = require("../config/db");

const Salon = {
  obtenerTodos: async () => {
    const [rows] = await pool.query("SELECT * FROM salones WHERE activo = 1");
    return rows;
  },
  obtenerPorId: async (id) => {
    const [rows] = await pool.query(
      "SELECT * FROM salones WHERE salon_id = ? AND activo = 1",
      [id],
    );
    return rows[0];
  },
  crear: async (datos) => {
    const {
      titulo,
      direccion,
      latitud,
      longitud,
      capacidad,
      importe,
      activo = 1,
    } = datos;
    const [result] = await pool.query(
      "INSERT INTO salones (titulo, direccion, latitud, longitud, capacidad, importe, activo) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [titulo, direccion, latitud, longitud, capacidad, importe, activo],
    );
    return result.insertId;
  },
  actualizar: async (id, datos) => {
    const { titulo, direccion, latitud, longitud, capacidad, importe, activo } =
      datos;
    await pool.query(
      "UPDATE salones SET titulo = ?, direccion = ?, latitud = ?, longitud = ?, capacidad = ?, importe = ?, activo = ? WHERE salon_id = ?",
      [titulo, direccion, latitud, longitud, capacidad, importe, activo, id],
    );
  },
  eliminar: async (id) => {
    await pool.query("UPDATE salones SET activo = 0 WHERE salon_id = ?", [id]);
  },
};

module.exports = Salon;
