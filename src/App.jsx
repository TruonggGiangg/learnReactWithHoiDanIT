import TodoData from "./component/todo/TodoData";
import TodoInput from "./component/todo/TodoInput";
import reactLogo from "./assets/react.svg"
import './component/todo/todo.css'
const App = () => {

    const name1 = 'Le Truong Giang';
    const age = 25;
    const data = {
      address :  "Ha Noi",
      country : "VN"
    }

    return (
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoInput>
        </TodoInput>
        <TodoData
          name1 = {name1}
          age = {age}
          data = {data}
        />    
        <img className="logo" src={reactLogo}/>
      </div>
    )
}

export default App;