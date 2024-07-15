import { useState } from "react";

const TodoInput = (props) => {
    
    //Use State Hook
    const [valueInput, setValueInput] = useState("eric"); 
    //biến lưu, hàm, giá trị ban đầu
    const handleClick = () => {
      console.log('check: ', valueInput);
    }


    return (
        <div className="todo-contain-input">
          <input 
            onChange={(event) =>  {setValueInput(event.target.value)}}
            className="todo-input" 
            type="text"></input>
          <button 
            onClick={handleClick} 
            className="todo-btn"
          >
            Add
          </button>
          <span>

          </span>
        </div>
        
    )
}

export default TodoInput;