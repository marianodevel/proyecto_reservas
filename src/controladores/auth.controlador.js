const UsuarioServicio = require("../servicios/usuario.servicio");

const login = async (req, res) => {
  const { nombre_usuario, contrasenia } = req.body;

  try {
    if (!nombre_usuario || !contrasenia) {
      return res
        .status(400)
        .json({ error: "Nombre de usuario y contraseña son requeridos" });
    }

    const token = await UsuarioServicio.login(nombre_usuario, contrasenia);

    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { login };
