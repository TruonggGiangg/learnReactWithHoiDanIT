const TodoData = (props) =>{
    const {todoList} = props;//object destructuring
    
    return (
        <div className="todo-data">
          {todoList.map(
            (x, i)=>{
              return (
                <div className={`todo-item`} key={x.id}>
                  <div>
                    ID:{x.id}, name:{x.name}
                  </div>
                  <button>Delete</button>
                </div>
              )
            }
          )}
        </div>
    )
}

export default TodoData;