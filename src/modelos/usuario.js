const pool = require("../config/db");

const Usuario = {
  obtenerTodos: async () => {
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE activo = 1");
    return rows;
  },
  obtenerPorId: async (id) => {
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE usuario_id = ? AND activo = 1",
      [id],
    );
    return rows[0];
  },
  crear: async (datos) => {
    const {
      nombre,
      apellido,
      nombre_usuario,
      contrasenia,
      tipo_usuario,
      celular,
      foto,
      activo = 1,
    } = datos;
    const [result] = await pool.query(
      "INSERT INTO usuarios (nombre, apellido, nombre_usuario, contrasenia, tipo_usuario, celular, foto, activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nombre,
        apellido,
        nombre_usuario,
        contrasenia,
        tipo_usuario,
        celular,
        foto,
        activo,
      ],
    );
    return result.insertId;
  },
  actualizar: async (id, datos) => {
    const {
      nombre,
      apellido,
      nombre_usuario,
      contrasenia,
      tipo_usuario,
      celular,
      foto,
      activo,
    } = datos;
    await pool.query(
      "UPDATE usuarios SET nombre = ?, apellido = ?, nombre_usuario = ?, contrasenia = ?, tipo_usuario = ?, celular = ?, foto = ?, activo = ? WHERE usuario_id = ?",
      [
        nombre,
        apellido,
        nombre_usuario,
        contrasenia,
        tipo_usuario,
        celular,
        foto,
        activo,
        id,
      ],
    );
  },
  eliminar: async (id) => {
    await pool.query("UPDATE usuarios SET activo = 0 WHERE usuario_id = ?", [
      id,
    ]);
  },

  // Nuevo método requerido para autenticación
  obtenerPorNombreUsuario: async (nombre_usuario) => {
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE nombre_usuario = ?",
      [nombre_usuario],
    );
    return rows[0];
  },
};

module.exports = Usuario;
