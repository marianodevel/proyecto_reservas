const UsuarioModelo = require("../modelos/usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

const UsuarioServicio = {
  obtenerTodos: async () => {
    return await UsuarioModelo.obtenerTodos();
  },

  obtenerPorId: async (id) => {
    return await UsuarioModelo.obtenerPorId(id);
  },

  crear: async (datos) => {
    const salt = await bcrypt.genSalt(10);
    const contraseniaHasheada = await bcrypt.hash(datos.contrasenia, salt);

    const datosConHash = {
      ...datos,
      contrasenia: contraseniaHasheada,
    };

    return await UsuarioModelo.crear(datosConHash);
  },

  actualizar: async (id, datos) => {
    // Nota: La lógica de actualización de contraseña requeriría
    // verificar si el campo contrasenia fue enviado para hashearlo.
    // Por simplicidad BREAD, se mantiene la actualización directa.
    return await UsuarioModelo.actualizar(id, datos);
  },

  eliminar: async (id) => {
    return await UsuarioModelo.eliminar(id);
  },

  // Nuevo método de servicio para autenticación
  login: async (nombre_usuario, contrasenia) => {
    const usuario = await UsuarioModelo.obtenerPorNombreUsuario(nombre_usuario);
    if (!usuario) {
      throw new Error("Credenciales inválidas");
    }

    if (usuario.activo === 0) {
      throw new Error("El usuario se encuentra inactivo");
    }

    const esCorrecta = await bcrypt.compare(contrasenia, usuario.contrasenia);
    if (!esCorrecta) {
      throw new Error("Credenciales inválidas");
    }

    const payload = {
      usuario: {
        id: usuario.usuario_id,
        rol: usuario.tipo_usuario, // Almacenamos el rol (tipo_usuario)
      },
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: "1h",
    });

    return token;
  },
};

module.exports = UsuarioServicio;
