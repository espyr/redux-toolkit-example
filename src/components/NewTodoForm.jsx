import { addTodoAsync } from "../redux/todosSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function NewTodoForm(props) {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState({
    title: "",
    completed: false,
  });

  return (
    <form
      style={{
        display: "flex",
        width: "250px",
        justifyContent: "space-between",
        paddingBlock: "20px",
      }}
    >
      <label htmlFor="title">Title: </label>

      <input
        id="title"
        type="text"
        onChange={(e) =>
          setNewTodo((newComment) => ({
            ...newComment,
            id: props.commentsLength + 1,
            title: e.target.value,
          }))
        }
      />

      <button
        onClick={() => {
          if (newTodo.title !== "") {
            dispatch(addTodoAsync(newTodo));
          }

          props.setIsOpen(false);
        }}
      >
        Add
      </button>
    </form>
  );
}
