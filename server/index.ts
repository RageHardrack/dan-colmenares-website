import { config } from "dotenv";
// Configuración especial para leer el archivo .env en la raíz del Repo
config({ path: "../.env" });

import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
