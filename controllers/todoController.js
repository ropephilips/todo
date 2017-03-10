var Todo = MODEL('todo').schema;

exports.install = function(){
 F.route('/list/',todo_get,['get']);
 F.route('/list/',todo_post,['post']);
 F.route('/list/',todo_delete,['delete']);

}
  function todo_get(){
   var self = this;
     Todo.find({},function(err,data){
        if (err) throw err;
           self.view('list',{todos:data});
    });
}

   function todo_post(){
     var self = this;
     var newTodo = Todo(self.body).$save(function(err,data){
        if (err) throw err;
           self.json({todos:data});
    });

}
   function todo_delete(item){
    var self = this;
      Todo.find({item:req.params.item.replace(/\-/g," ")}).$remove(function(err,data){
        if (err) throw err;
          self.json({todos:data});
     });
  }
