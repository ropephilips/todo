var mongoose = require('mongoose');
var todoSchema = new mongoose.Schema({
  item: String
 })
 exports.schema = mongoose.model('Todo',todoSchema);
 exports.id = 'Todo';
