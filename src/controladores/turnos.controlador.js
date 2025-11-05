const BREADControlador = require("./BREAD.factory");
const TurnoServicio = require("../servicios/turno.servicio");

module.exports = BREADControlador(TurnoServicio, "Turno");
