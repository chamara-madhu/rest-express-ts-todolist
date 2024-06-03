import { Request, Response } from "express";
import * as TaskService from "../services/taskService";
import { STATUS } from "../constants/general";

export const createTask = (req: Request, res: Response) => {
    const { title, status } = req.body;

    if (!title || !status) {
        return res.status(400).json({ error: "Title and status are required" });
    }

    if (![STATUS.DONE, STATUS.NOT_DONE].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    const newTask = TaskService.createTask(title, status);
    res.status(201).json(newTask);
};

export const fetchAllTasks = (req: Request, res: Response) => {
    const tasks = TaskService.fetchAllTasks();
    res.status(200).json(tasks);
};

export const deleteTask = (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Task ID is required" });
    }

    const success = TaskService.deleteTask(id);

    if (success) {
        res.status(200).json({ message: "Task has been deleted" });
    } else {
        res.status(404).json({ error: "Task not found" });
    }
};

export const searchTasks = (req: Request, res: Response) => {
    const query = req.query.key as string;
    const tasks = TaskService.searchTasks(query);
    res.status(200).json(tasks);
};

export const updateStatusOfTask = (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!id) {
        return res.status(400).json({ error: "Task ID is required" });
    }

    if (!status) {
        return res.status(400).json({ error: "Status is required" });
    }

    if (![STATUS.DONE, STATUS.NOT_DONE].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    const success = TaskService.updateStatusOfTask(id, status);

    if (success) {
        res.status(200).json({ message: "Task has been updated" });
    } else {
        res.status(404).json({ error: "Task not found" });
    }
};
