const express = require("express");
const salonesRuta = require("./rutas/salones.ruta");
const serviciosRuta = require("./rutas/servicios.ruta");
const turnosRuta = require("./rutas/turnos.ruta");
const reservasRuta = require("./rutas/reservas.ruta");
const usuariosRuta = require("./rutas/usuarios.ruta");
const reservasServiciosRuta = require("./rutas/reservas_servicios.ruta");
const authRuta = require("./rutas/auth.ruta");

const app = express();
app.use(express.json());

// Rutas Públicas
app.use("/auth", authRuta);

// Rutas (próximamente protegidas)
app.use("/salones", salonesRuta);
app.use("/servicios", serviciosRuta);
app.use("/turnos", turnosRuta);
app.use("/reservas", reservasRuta);
app.use("/usuarios", usuariosRuta);
app.use("/reservas-servicios", reservasServiciosRuta);

module.exports = app;
