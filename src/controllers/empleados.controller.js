import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM empleados");
  res.json(rows);
};

export const getEmpleadoById = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(
    "SELECT * FROM archivos WHERE id_empleado = ?",
    [id]
  );
  if (rows.length <= 0) {
    return res.status(404).json({ message: "Archivo no encontrado" });
  } else {
    return res.json(rows);
  }
};

export const postEmpleado = async (req, res) => {
  const { nombre_completo } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO empleados (nombre_completo) VALUES (?)",
    [nombre_completo]
  );
  res.json({ id_empleado: rows.insertId, nombre_completo });
};

export const putEmpleado = async (req, res) => {
  const { nombre_completo } = req.body;
  const { id } = req.params;
  const [rows] = await pool.query(
    "UPDATE empleados SET nombre_completo = ? WHERE id_empleado = ?",
    [nombre_completo, id]
  );
  res.json({ id_empleado: id, nombre_completo });
};

export const deleteEmpleado = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(
    "DELETE FROM empleados WHERE id_empleado = ?",
    [id]
  );
  res.json(rows);
};
