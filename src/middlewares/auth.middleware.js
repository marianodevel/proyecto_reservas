const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ error: "Acceso denegado: No se proveyó token" });
  }

  // El token usualmente viene como "Bearer <token>"
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ error: "Acceso denegado: Token mal formado" });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    // Adjuntamos el payload del token (que tiene id y rol)
    // al objeto request para usarlo en futuros middlewares o controladores
    req.usuario = payload.usuario;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expirado" });
    }
    res.status(401).json({ error: "Token inválido" });
  }
};

module.exports = authMiddleware;
