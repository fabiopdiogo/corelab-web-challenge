const TaskModel = require("../models/TaskModel")

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find()
  res.send(tasks);
}

module.exports.saveTask = (req, res) => {

  const { title, note, color,favorite } = req.body;

  TaskModel.create({ title, note, color,favorite})
  .then((data) =>{
    console.log("Saved Successfully");
    res.status(201).send(data);
  })
  .catch((err) => {
    console.log(err);
    res.send({ error:err, msg: "Something went lil bit wrong!" })
  })

};


module.exports.updateTask = (req, res) => {
  const {id} = req.params;
  console.log(id)
  const { note } = req.body;

  TaskModel.findByIdAndUpdate(id, {note})
  .then(() => res.send("Updated successfully"))
  .catch((err) => {
    console.log(err);
    res.send({ error: err, msg: "Something went wrong!" })
  });
};

module.exports.deleteTask = (req, res) => {
  const {id} = req.params;

  TaskModel.findByIdAndDelete(id)
  .then(() => res.send("Deleted successfully"))
  .catch((err) => {
    console.log(err);
    res.send({ error: err, msg: "Something went wrong!" })
  });
};