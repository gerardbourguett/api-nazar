import { Router } from "express";
import multer from "multer";
import {
  deleteArchivos,
  getArchivos,
  postArchivos,
  putArchivos,
  getArchivosById,
} from "../controllers/archivos.controller.js";

const router = Router();

// Configuración de Multer para guardar los archivos en la carpeta "uploads"
const upload = multer({ dest: "uploads/" });

router.get("/archivos", getArchivos);
router.get("/archivos/:id", getArchivosById);

// Agregar el middleware de Multer para el manejo de archivos en la ruta POST
router.post("/archivos", upload.single("archivo"), postArchivos);

router.patch("/archivos/:id", putArchivos);

router.delete("/archivos/:id", deleteArchivos);

export default router;
