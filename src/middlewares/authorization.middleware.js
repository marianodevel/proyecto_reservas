const checkRoles = (rolesPermitidos) => {
  return (req, res, next) => {
    // req.usuario fue adjuntado por el middleware de autenticación
    if (!req.usuario || !req.usuario.rol) {
      return res
        .status(401)
        .json({ error: "No se proporcionó información de autenticación" });
    }

    const rolUsuario = req.usuario.rol;

    if (!rolesPermitidos.includes(rolUsuario)) {
      return res
        .status(403) // 403 Forbidden (Prohibido)
        .json({ error: "Acceso denegado: No tiene permisos suficientes" });
    }

    // El usuario tiene el rol permitido
    next();
  };
};

module.exports = checkRoles;
