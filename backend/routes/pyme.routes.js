import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getPymes } from "../controllers/pyme.controller.js";
// Aqui falta crear el otro validator

const router = Router();

router.get("/pymes", getPymes);

// router.get("/pymes/:id", getTask);
// router.post("/pymes", authRequired, createTasks);
// router.delete("/pymes/:id", authRequired, deleteTasks);
// router.put("/pymes/:id", authRequired, updateTasks);

export default router;
