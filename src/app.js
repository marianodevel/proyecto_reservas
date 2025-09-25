const express = require("express");
const salonesRuta = require("./rutas/salones.ruta");
const serviciosRuta = require("./rutas/servicios.ruta");
const turnosRuta = require("./rutas/turnos.ruta");
const reservasRuta = require("./rutas/reservas.ruta");
const usuariosRuta = require("./rutas/usuarios.ruta");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./src/docs/swagger.yaml");

const app = express();
app.use(express.json());

// Rutas
app.use("/salones", salonesRuta);
app.use("/servicios", serviciosRuta);
app.use("/turnos", turnosRuta);
app.use("/reservas", reservasRuta);
app.use("/usuarios", usuariosRuta);

// Documentación
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
