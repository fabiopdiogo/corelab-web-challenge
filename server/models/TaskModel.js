const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
  title: { type: String},
  note: { type: String, required: true },
  color: {type: String},
  favorite: {type: Boolean}
})

module.exports = mongoose.model('Task', taskSchema)