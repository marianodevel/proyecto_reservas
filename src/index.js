const app = require("./app");
const pool = require("./config/db");

const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || "reservas_db";

async function iniciar() {
  try {
    await pool.query("SELECT 1");
    console.log(`Conexión a la BD "${DB_NAME}" establecida`);

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar a la BD:", error.message);
    process.exit(1);
  }
}

iniciar();
