import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getTasks,
    getTask,
    createTasks,
    updateTasks,
    deleteTasks,
} from "../controllers/tasks.controllers.js";
// Aqui falta crear el otro validator

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post("/tasks", authRequired, createTasks);
router.delete("/tasks/:id", authRequired, deleteTasks);
router.put("/tasks/:id", authRequired, updateTasks);

export default router;
