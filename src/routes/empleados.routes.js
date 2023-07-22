import { Router } from "express";
import {
  deleteEmpleado,
  getEmpleados,
  postEmpleado,
  putEmpleado,
  getEmpleadoById,
} from "../controllers/empleados.controller.js";

const router = Router();

router.get("/empleados", getEmpleados);
router.get("/empleados/:id", getEmpleadoById);

router.post("/empleados", postEmpleado);

router.patch("/empleados", putEmpleado);

router.delete("/empleados", deleteEmpleado);

export default router;
