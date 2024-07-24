import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
      setTodos([todos,newTodo]);
  }
  useEffect(() => {
    axios.get('http://localhost:5000/todos')
        .then(response => setTodos(response.data))
        .catch(error => console.error(error));
  }, []);
  return (
      <div>
        <h1>MERN Stack Todo App</h1>
        <TodoForm onAdd={addTodo} />
        <ul>
          {todos.map(todo => (
              <li key={todo._id}>{todo.task}: {todo.completed}</li>
              ))}
        </ul>
      </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
