import { pool } from "../db.js";
import multer from "multer";

// Configuración de Multer para guardar los archivos en la carpeta "uploads"
const upload = multer({ dest: "uploads/" });

export const getArchivos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM archivos");
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

export const getArchivosById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM archivos WHERE id_archivo = ?",
      [id]
    );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Archivo no encontrado" });
    } else {
      return res.json(rows);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// Middleware para el manejo de archivos usando Multer
export const uploadArchivo = upload.single("archivo");

export const postArchivos = async (req, res) => {
  try {
    const { nombre_archivo, id_empleado } = req.body;

    // Verificar si se ha cargado un archivo y obtener su información
    let archivoUrl = null;
    if (req.file) {
      archivoUrl = req.file.path; // Aquí puedes guardar la URL del archivo en la base de datos o en otro lugar
    }

    const [rows] = await pool.query(
      "INSERT INTO archivos(nombre_archivo, id_empleado, archivo_url) VALUES (?,?,?)",
      [nombre_archivo, id_empleado, archivoUrl]
    );
    res.json({ id: rows.insertId, nombre_archivo, id_empleado });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
};

export const putArchivos = async (req, res) => {
  const { nombre_archivo, id_empleado } = req.body;
  const { id } = req.params;
  try {
    const [rows] = await pool.query(
      "UPDATE archivos SET nombre_archivo = IFNULL(?, nombre_archivo), id_empleado = IFNULL(?, id_empleado) WHERE id_archivo = ?",
      [nombre_archivo, id_empleado, id]
    );

    console.log(rows);
    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: "Archivo no encontrado" });
    }

    const [rowsN] = await pool.query(
      "SELECT * FROM archivos where id_archivo = ?",
      [id]
    );
    res.json(rowsN[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar el archivo",
    });
  }
};

export const deleteArchivos = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM archivos WHERE id_archivo = ?",
      [req.params.id]
    );
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "Archivo no encontrado" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar el archivo",
    });
  }
};
