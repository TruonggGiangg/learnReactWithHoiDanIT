import TodoData from "./component/todo/TodoData";
import TodoInput from "./component/todo/TodoInput";
import reactLogo from "./assets/react.svg"
import './component/todo/todo.css'
const App = () => {
    return (
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoInput></TodoInput>
        <TodoData></TodoData>
        <img className="logo" src={reactLogo}/>
      </div>
    )
}

export default App;