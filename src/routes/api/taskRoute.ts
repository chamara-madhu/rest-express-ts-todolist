import express from "express";
import {
    createTask,
    deleteTask,
    fetchAllTasks,
    searchTasks,
    updateStatusOfTask
} from "../../controllers/taskController"; // Adjust the path if necessary

const router = express.Router();

router.post("/", createTask);
router.get("/", fetchAllTasks);
router.delete("/:id", deleteTask);
router.get("/search", searchTasks);
router.put("/:id", updateStatusOfTask);

export default router;
