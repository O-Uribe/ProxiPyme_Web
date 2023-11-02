import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        user: req.user.id,
    }).populate("user");
    res.json(tasks);
};

export const createTasks = async (req, res) => {
    const { title, description, date } = req.body;
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id,
    });
    await newTask.save();
    res.json(newTask);
};

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.json(task);
};

export const updateTasks = async (req, res) => {
    const { title, description, date } = req.body;
    const taskUpdated = await Task.findOneAndUpdate(
        { _id: req.params.id },
        { title, description, date },
        { new: true }
    );
    return res.json(taskUpdated);
};

export const deleteTasks = async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask)
        return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
};
