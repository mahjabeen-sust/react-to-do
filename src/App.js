
import List from '@mui/material/List';
import './App.css';
import AddTodoButton from './components/AddTodoButton.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import React, { useState, useEffect } from 'react';




function App() {
  const [todo, setTodo] = useState([])
  const [form, setForm] = useState(0);
  const todoLegends =
    [
      { "title": "Done", "deadline": "", "stats": "done", "id": 1 },
      { "title": "Not Started", "deadline": "", "stats": "not_started", "id": 2 },
      { "title": "In Progress", "deadline": "", "stats": "in_progress", "id": 3 }
    ]



  //only run once the first time  this component is rendered
  //(we will load  from local storage when the page is first loaded)
  useEffect(() => {
    // console.log(localStorage.getItem("exampleTodo"));
    if (localStorage.getItem("exampleTodo")) {
      console.log(localStorage.getItem("exampleTodo"))
      setTodo(JSON.parse(localStorage.getItem("exampleTodo")))
      // setTodo(localStorage.getItem("exampleTodo"))
    }

  }, [])
  //1st parameter is a function to change
  //2nd parameter is the list of depedencies, when they are changed, we call the function

  //run every time our todo state changes
  //(we will save any change to local storage so the data stays, even after reload)
  useEffect(() => {

    localStorage.setItem("exampleTodo", JSON.stringify(todo))
    //JSON.stringify will change our array data into string of text and save that to local storage
  }, [todo])
  console.log("Local storage : " + localStorage.getItem("exampleTodo"))
  // console.log("to do" + todo)





  return (
    < div className='MainDiv' >
      <AddTodoButton setForm={setForm} />

      {form ? <TodoForm setForm={setForm} setTodo={setTodo} /> : ''}


      {
        todo.length > 0 ? <List className='todolist-item'>{

          todo.map(todo => <TodoList setTodo={setTodo} id={todo.id} title={todo.title} deadline={todo.deadline} stats={todo.stats} key={todo.id} />)

        }</List> : ''
      }

      {
        todo.length > 0 ? <List className='todolist-item todolist-item--legend'>{

          todoLegends.map(todoLegend => <TodoList setTodo={''} id={todoLegend.id} title={todoLegend.title} deadline={todoLegend.deadline} stats={todoLegend.stats} key={todoLegend.id} />)

        }</List> : ''
      }


    </div >
  );
}







export default App;
