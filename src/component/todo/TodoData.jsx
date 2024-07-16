const TodoData = (props) =>{
    const {todoList} = props;//object destructuring
    
    return (
        <div className="todo-data">
          {todoList.map(
            (x)=>{
              return (
                <div>ID:{x.id}, name:{x.name}</div>
              )
            }
          )}
        </div>
    )
}

export default TodoData;