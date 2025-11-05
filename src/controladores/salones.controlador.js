const BREADControlador = require("./BREAD.factory");
const SalonServicio = require("../servicios/salon.servicio");

module.exports = BREADControlador(SalonServicio, "Salón");
