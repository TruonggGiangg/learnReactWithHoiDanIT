const TodoData = (props) =>{
    const {todoList, deleteTodo} = props;//object destructuring
    
    const handleDel = (id) => {
      deleteTodo(id);
    }

    return (
        <div className="todo-data">
          {todoList.map(
            (x)=>{
              return (
                <div className={`todo-item`} key={x.id}>
                  <div>
                    ID:{x.id}, name:{x.name}
                  </div>
                  <button onClick={()=>handleDel(x.id)}>Delete</button>
                </div>
              )
            }
          )}
        </div>
    )
}

export default TodoData;