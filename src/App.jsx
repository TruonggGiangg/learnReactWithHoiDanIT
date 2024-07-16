import TodoData from "./component/todo/TodoData";
import TodoInput from "./component/todo/TodoInput";
import reactLogo from "./assets/react.svg"
import './component/todo/todo.css'
import { useState } from "react";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
const App = () => {

  const [todoList, setTodo] = useState([
  ]);


  const addNewTodo = (names) => {
    const newToDo = {
      id: getRandomInt(1, 1000000),
      name: names,
    }
    setTodo([...todoList, newToDo])
  }

  const deleteTodo = (ids) => {
    const newList = todoList.filter(x => x.id !== ids)
    setTodo(newList);
  }


  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoInput
          addNewTodo={addNewTodo}

        />
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
        {todoList.length === 0 &&
          <img className="logo" src={reactLogo} />
        }

      </div>
      <Footer />
    </>

  )
}

export default App;