const TodoData = (props) =>{
    const {name, age, data} = props;//object destructuring

    return (
        <div className="todo-data">
          <div>{name}</div>
          <div>{age}</div>
          <div>{JSON.stringify(data)}</div>
        </div>
    )
}
export default TodoData;