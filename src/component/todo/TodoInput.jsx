import { useState } from "react";

const TodoInput = (props) => {
    const {addNewTodo} = props;
    //Use State Hook
    const [valueInput, setValueInput] = useState(""); 
    
    const handleInput = (name)=>{
      setValueInput(name);
    }

    const handleClick = () => {
      addNewTodo(valueInput);
      setValueInput('')
    }

    

    return (
        <div className="todo-contain-input">
          <input 
            onChange={(event)=>{handleInput(event.target.value)}}
            className="todo-input" 
            type="text"
            value={valueInput}>
            
          </input>
          
          <button 
            onClick={(handleClick)} 
            className="todo-btn"
          >
            Add
          </button>
          <span>
            This this my text: {valueInput}
          </span>
        </div>
    )
}

export default TodoInput;