const BREADControlador = require("./BREAD.factory");
const ReservaServicio = require("../servicios/reserva.servicio");

module.exports = BREADControlador(ReservaServicio, "Reserva");
