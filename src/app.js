const express = require("express");
const salonesRuta = require("./rutas/salones.ruta");
const serviciosRuta = require("./rutas/servicios.ruta");
const turnosRuta = require("./rutas/turnos.ruta");
const reservasRuta = require("./rutas/reservas.ruta");
const usuariosRuta = require("./rutas/usuarios.ruta");
const reservasServiciosRuta = require("./rutas/reservas_servicios.ruta");
const authRuta = require("./rutas/auth.ruta");

// Importamos el nuevo middleware
const authMiddleware = require("./middlewares/auth.middleware");

const app = express();
app.use(express.json());

// Rutas Públicas (no requieren token)
app.use("/auth", authRuta);

// Todas las rutas definidas DEBAJO de esta línea requerirán un token válido
app.use(authMiddleware);

// Rutas Protegidas
app.use("/salones", salonesRuta);
app.use("/servicios", serviciosRuta);
app.use("/turnos", turnosRuta);
app.use("/reservas", reservasRuta);
app.use("/usuarios", usuariosRuta);
app.use("/reservas-servicios", reservasServiciosRuta);

module.exports = app;
