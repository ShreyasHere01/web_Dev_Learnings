import express from "express";
const app =express();
app.use(express.json());
let todos=[];
let ctr=1;

// app.get('/todos',function(req, res){
//     res.json(todos);

// })
app.post('/todos',function(req, res){
    const todo= req.body.todo;
    todos.push({
        id:ctr,
        title:todo
        
    });
    ctr++
    res.send("todo craeted");
})
//  app.delete('/todos/:id', function(req,res){
//     const ids=parseInt(req.params.id);
//     todos=todos.filter(todo=>todo.id!=ids);
//     res.send("todo delted");
//  })

app.listen(4000,()=>{
    console.log("server started on port 4000")
});