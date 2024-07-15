const TodoData = (props) =>{
    const {names, age, data, todoList} = props;//object destructuring
    
    return (
        <div className="todo-data">
          <div>{names}</div>
          <div>{age}</div>
          <div>{JSON.stringify(data)}</div>
          <div>
            {JSON.stringify(todoList)}
          </div>
        </div>
    )
}
export default TodoData;