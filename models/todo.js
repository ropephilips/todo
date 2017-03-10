
 var mongoose = require('mongoose');
 var todoSchema = new mongoose.Schema({
  item: String
});
// var Todo = mongoose.model('todo',todoSchema);
 //exports.schema = Todo;
// exports.id = 'todo';

 exports.schema = mongoose.model('todo',todoSchema);
 exports.id = 'todo';
