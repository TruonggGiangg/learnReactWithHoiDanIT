import TodoData from "./component/todo/TodoData";
import TodoInput from "./component/todo/TodoInput";
import reactLogo from "./assets/react.svg"
import './component/todo/todo.css'
import { useState } from "react";
const App = () => {

    const [todoList, setTodo] = useState([
      {id:1, name: 'Learing React'},
      {id:2, name: 'Watching TV'}
    ]);


    const names = 'Le Truong Giang';
    const age = 25;
    const data = {
      address :  "Ha Noi",
      country : "VN"
    }


    return (
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoInput
        />
        <TodoData
          names = {names}
          age = {age}
          data = {data}
          todoList = {todoList}
        />    
        <img className="logo" src={reactLogo}/>
      </div>
    )
}

export default App;