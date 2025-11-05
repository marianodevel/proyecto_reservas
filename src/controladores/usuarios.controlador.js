const BREADControlador = require("./BREAD.factory");
const UsuarioServicio = require("../servicios/usuario.servicio");

module.exports = BREADControlador(UsuarioServicio, "Usuario");
