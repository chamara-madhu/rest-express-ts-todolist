import { v4 as uuidv4 } from 'uuid';
import { STATUS } from "../constants/general";

interface Task {
    id: string;
    title: string;
    status: STATUS.DONE | STATUS.NOT_DONE;
}

let tasks: Task[] = [{
    id: uuidv4(),
    title: "Create todo list using React, Next, Node, Express, and Typescript.",
    status: STATUS.DONE
}];

export const createTask = (title: string, status: STATUS.DONE | STATUS.NOT_DONE): Task => {
    const obj: Task = {
        id: uuidv4(),
        title: title,
        status: status,
    };

    tasks.push(obj);
    return obj;
};

export const fetchAllTasks = (): Task[] => {
    return tasks;
};

export const deleteTask = (id: string): boolean => {
    const initialLength = tasks.length;
    tasks = tasks.filter((task) => task.id !== id);
    return tasks.length < initialLength;
};

export const searchTasks = (query: string): Task[] => {
    if (!query) {
        return tasks;
    }

    return tasks.filter(task =>
        task.title.toLowerCase().includes(query.toLowerCase())
    );
};

export const updateStatusOfTask = (id: string, status: STATUS.DONE | STATUS.NOT_DONE): boolean => {
    let updated = false;

    tasks = tasks.map(task => {
        if (task.id === id) {
            updated = true;
            return {
                ...task,
                status
            }
        }

        return task;
    });

    return updated;
};
