let todos=[];
let _id=0;

// Get all todos
export const getTodos=(req,res)=>{
  res.json(todos);
}

// Get a todo by id
export const getTodo=(req,res)=>{
  const id=+req.params.id;
  if(!id) return res.status(400).json({message:'Id is required'});
  const todo=todos.find(todo=>todo._id===id);
  if(!todo) return res.status(404).json({message:'Todo not found'});
  res.json(todo);
}

// Create a todo
export const createTodo= (req,res)=>{
  const {title,desc}=req.body;
  if(!title) return res.status(400).json({message:'Title is required'});
  _id++;
  todos.push({_id,title,desc:desc||'',done:false});
  res.json({message:'Todo created successfully',todo:todos[todos.length-1]});
}

// Update a todo
export const updateTodo=(req,res)=>{
  const id=+req.params.id;
  if(!id) return res.status(400).json({message:'Id is required'});
  const {title,desc,done}=req.body;
  const todo=todos.find(todo=>todo._id===id);
  if(!todo) return res.status(404).json({message:'Todo not found'});
  todo.title=title||todo.title;
  todo.desc=desc||todo.desc;
  todo.done=done||todo.done;
  res.json({message:'Todo updated successfully',todo});
}

// Delete a todo
export const deleteTodo=(req,res)=>{
  const id=+req.params.id;
  if(!id) return res.status(400).json({message:'Id is required'});
  const todo=todos.find(todo=>todo._id===id);
  if(!todo) return res.status(404).json({message:'Todo not found'});
  todos=todos.filter(todo=>todo._id!==id);
  res.json({message:'Todo deleted successfully',todo});
}