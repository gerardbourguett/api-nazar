import { Router } from "express";
import {
  deleteArchivos,
  getArchivos,
  postArchivos,
  putArchivos,
  getArchivosById,
} from "../controllers/archivos.controller.js";

const router = Router();

router.get("/archivos", getArchivos);
router.get("/archivos/:id", getArchivosById);

router.post("/archivos", postArchivos);

router.patch("/archivos/:id", putArchivos);

router.delete("/archivos/:id", deleteArchivos);

export default router;
