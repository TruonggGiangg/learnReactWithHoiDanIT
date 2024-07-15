const TodoData = (props) =>{
    const {name, age, data, addNewTodo} = props;//object destructuring

    return (
        <div className="todo-data">
          <div>{name}</div>
          <div>{age}</div>
          <div>{JSON.stringify(data)}</div>
        </div>
    )
}
export default TodoData;