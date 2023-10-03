import { addComment } from "../redux/commentSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function NewCommentForm(props) {
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  return (
    <form style={{ display: "grid", justifyContent: "center" }}>
      <label htmlFor="name">Name: </label>

      <input
        id="name"
        type="text"
        onChange={(e) =>
          setNewComment((newComment) => ({
            ...newComment,
            id: props.commentsLength + 1,
            name: e.target.value,
          }))
        }
      />
      <label htmlFor="email">Email: </label>

      <input
        id="email"
        type="email"
        onChange={(e) =>
          setNewComment((newComment) => ({
            ...newComment,
            email: e.target.value,
          }))
        }
      />
      <label htmlFor="body">Body: </label>

      <input
        id="body"
        type="text"
        onChange={(e) =>
          setNewComment((newComment) => ({
            ...newComment,
            body: e.target.value,
          }))
        }
      />
      <div style={{ paddingTop: "20px" }}>
        <button
          onClick={() => {
            if (
              newComment.email !== "" &&
              newComment.body !== "" &&
              newComment.name !== ""
            ) {
              dispatch(addComment(newComment));
            }

            props.setIsOpen(false);
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}
