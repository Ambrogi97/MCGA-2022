import { useState } from 'react';
import './App.css';
import Form from './component/form';
import TodoItem from './component/todoitem';

function App() {
  const [todos, setTodos] = useState([
    {
    title: "juan",
    ids: Math.random() * 0.99 + 2 
    }
  ])
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
};

const removeTodo = (id) =>{
  setTodos(todos.filter(todo, id !== ids))
}
  return( 
    <div className='App'>
      <Form addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem todo={todo}/>
      ))}
      {!todos.length && <p>No todos</p>}
    </div>
  )
}

export default App;
