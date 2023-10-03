import { useDispatch, useSelector } from "react-redux";
import { Todo } from "./Todo";
import { getTodosAsync } from "../redux/todosSlice";
import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
export function Todos() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const todos = useSelector((state) => state.todos);
  //   useEffect(() => {
  //     dispatch(getTodosAsync())
  //     console.log(todos)

  //   }, [dispatch]);

  return (
    <div style={{ paddingBlock: "10px" }}>
      <h1>TODOS</h1>
      <button onClick={() => dispatch(getTodosAsync())}>Get TODOS</button>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          paddingBlock: "10px",
        }}
      >
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <button onClick={() => setIsOpen(true)}>Add a new Todo</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isOpen && (
          <NewTodoForm commentsLength={todos.length} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
}
