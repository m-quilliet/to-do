import './App.css';
import Form from "./components/Form"
import Todo from "./components/Todo"
// import ToDoItem from './components/ToDoItem';
// import AddToDo from './components/AddToDo';
import { useState} from 'react';


export default function App() {
//   const [todo, setTodo] = useState([]);

//   const getItem = (item) => {
//     setTodo((prevState) => {
//       return [...prevState, item]
//     })
//   }
//   const getCompleted = (id) => {
//     setTodo((prevState) => {
//       return prevState.filter((item, index) => {
//         return index !==id;

//     })
//     })
// }
//   return (
//       <div className='todo'>
//         <AddToDo item={getItem}/>
//         {todo && todo.map((todo, index) => (
//           <ToDoItem id={index} item={todo} completed={getCompleted}/>
//         ))}          
//       </div>
//   )
///////////////////
const [todos, setTodos] = useState([]);

  return (
    <div className='app-wrapper'>
      <h1> TODO List</h1>
      <Form addTodo={todo => {
        //du tableau précédent
        setTodos(prev => [...prev, todo]);
      }}/>
      <div className='todo-list'>
        {todos.map((todo, i) => (
          <Todo 
            onDelete={() => {
              setTodos(prev => {
                return prev.filter((_,y) => i !== y);
            });
          }} 
          key={i}>{todo}
          </Todo>
        ) 
        )}
      </div>
    </div>
  )
}
