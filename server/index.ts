import dotenv from "dotenv";
// Configuración especial para leer el archivo .env en la raíz del Repo
dotenv.config({ path: "../.env" });

import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
