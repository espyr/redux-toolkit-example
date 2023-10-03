import { toggleTodoAsync, deleteTodoAsync } from "../redux/todosSlice";
import { useDispatch } from "react-redux";

export function Todo(props) {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(
      toggleTodoAsync({ id: props.todo.id, completed: !props.todo.completed })
    );
  };
  const deleteTodo = () => {
    dispatch(deleteTodoAsync(props.todo.id));
  };
  return (
    <div style={{ display: "flex", paddingTop: "10px" }} key={props.todo.id}>
      <input
        type="checkbox"
        className="mr-3"
        checked={props.todo.completed}
        onChange={handleCheckboxClick}
      />
      <div style={props.todo.completed ? { color: "blue" } : { color: "red" }}>
        {props.todo.title}
      </div>
      <button style={{ color: "red", marginLeft: "20px" }} onClick={deleteTodo}>
        Delete
      </button>{" "}
    </div>
  );
}
