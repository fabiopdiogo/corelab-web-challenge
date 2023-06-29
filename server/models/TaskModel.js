const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
  id: { type: Number, required: true, maxlength: 256},
  title: { type: String ,required: true},
  note: { type: String, required: true },
  color: {type: String},
  favorite: {type: String}
})

module.exports = mongoose.model('Task', taskSchema)