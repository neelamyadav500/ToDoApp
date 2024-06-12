import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function ToDo(){
   const [todos, setTodos]=useState([{task:"sample", id: uuidv4(), done:false}]);
   const [newTodo, setNewTodo]=useState("");

   let addTask=()=>{
    {newTodo==""?window.alert("Add the task!"):
    setTodos([...todos,{ task: newTodo, id: uuidv4(), done:false}]);
    setNewTodo("")
    }
    }
   let inputTask=(event)=>{
        setNewTodo(event.target.value.toUpperCase());
    
        }
   let deleteTask=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!=id));
   };
   let doneTask=(id)=>{
    setTodos(todos.map((todo)=>{
        if(todo.id==id){
            return{
                ...todo, done:!todo.done
        }
        }
        else{
            return todo;
        }
    }));
   };
   

    return(
        <div>
       <h2>ToDo App</h2>
       <input onChange={inputTask} value={newTodo} type="text" placeholder="Add a Task"/> &nbsp;&nbsp;
       <button onClick={addTask} style={{backgroundColor:'black', color:'white'}}>Add</button>
       <br></br>
       <br></br>
       <br></br>
       <hr></hr>
       <h3>Added Task...</h3>
       <ul>
        {
            todos.map((todo)=>(
                <li key={todo.id}>
                    <span style={todo.done ? { textDecoration: "line-through" } : { done:true}}><h3>{todo.task}</h3></span>
                    <button onClick={()=>deleteTask(todo.id)} style={{backgroundColor:'black', color:'white'}}>Delete</button> &nbsp;&nbsp;
                    <button onClick={()=>doneTask(todo.id)} style={{backgroundColor:'black', color:'white'}}>{todo.done ? "Undo" : "Done"}</button>
                </li>
            ))
        }
       </ul>
       </div>
    )
}