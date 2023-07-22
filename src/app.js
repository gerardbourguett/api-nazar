import express from "express";
import archivosRoutes from "./routes/archivos.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import ping from "./routes/index.routes.js";

import "./config.js";

const app = express();

app.use(express.json());

app.use(archivosRoutes);
app.use("/api", archivosRoutes);
app.use("/api", empleadosRoutes);
app.use(ping);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
