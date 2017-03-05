exports.install = function(){
 F.route('/todo/',todo,['get']);
 F.route('/todo/',todo_post,['post']);
 F.route('/todo/',todo_delete,['delete']);

}
  function todo(){
  var self = this;
  Todo.find({},function(err,data){
    if (err) throw err;
    self.view('todo',{todos:data});
  });

}
  function todo_post(){
    var self = this;
    var data = MODEL('Todo').schema;
    var newTodo = Todo(self.body).$save(function(err,data){
      if (err) throw err;
      self.json({todos:data});
    });

}
   function todo_delete(){
    var self = this;
    Todo.find({item:req.params.item.replace(/\-/g," ")}).$remove(function(err,data){
      if (err) throw err;
      self.json({todos:data});
    });

  }
