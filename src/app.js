import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";

const app = express();

app.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM empleados");
  res.json(rows);
});

app.get("/archivos", async (req, res) => {
  const [result] = await pool.query("SELECT * FROM archivos");
  res.json(result);
});

app.get("/create", async (req, res) => {
  const [result] = await pool.query(
    "INSERT INTO archivos (id_archivo, nombre_archivo, id_empleado) VALUES (1, 'Gonzalez', 1)"
  );
  console.log(result);
  res.send("Create");
});

app.get("/update", async (req, res) => {
  const [result] = await pool.query(
    "UPDATE archivos SET nombre_archivo = 'Gonzalez' WHERE id_archivo = 1"
  );
  console.log(result);
  res.send("Update");
});

app.get("/delete", async (req, res) => {
  const [result] = await pool.query(
    "DELETE FROM archivos WHERE id_archivo = 1"
  );
  console.log(result);
  res.send("Delete");
});

app.listen(PORT);
console.log("Server on port", PORT);
