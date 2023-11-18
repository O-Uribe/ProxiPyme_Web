import Task from "../models/task.model.js";
import User from "../models/user.models.js";
import Pyme from "../models/pyme.models.js";

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        // user: req.user.id,
        // }).populate("user");
    });
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

//USER
// export const getTask = async (req, res) => {
//     const task = await User.findById(req.params.id);
//     if (!task) return res.status(404).json({ message: "Task not found" });
//     // return res.json(task);
//     return res.json({
//         id: task._id,
//         usuario: task.tipoUsuario,
//         nombre: task.primerNombre,
//         apellido: task.primerApellido,
//         username: task.Nombre_Usuario,
//         email: task.Correo_Electronico,
//     });
// };

// PYME
export const getTask = async (req, res) => {
    const task = await Pyme.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    // return res.json(task);
    return res.json({
        id: task._id,
        tipoUsuario: task.tipoUsuario,
        nombrePyme: task.nombrePyme,
        direccionPyme: task.direccionPyme,
        encargadoPyme: task.encargadoPyme,
        categoria: task.categoria,
        descripcionPyme: task.descripcionPyme,
    });
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
