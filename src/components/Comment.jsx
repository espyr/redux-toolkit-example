import { changeTitle, deleteComment } from "../redux/commentSlice";
import { useDispatch } from "react-redux";

export function Comment(props) {
  const dispatch = useDispatch();

  return (
    <div key={props.comment.id}>
      {props.comment.id}
      <div id={props.comment.id}>
        <input
          id={props.comment.id}
          type="text"
          value={props.comment.name}
          onChange={(e) =>
            dispatch(
              changeTitle({ id: props.comment.id, title: e.target.value })
            )
          }
        />
        <button
          style={{ color: "red" }}
          onClick={() => dispatch(deleteComment(props.comment.id))}
        >
          Delete Comment
        </button>
      </div>
      <div style={{ color: "blue" }}>{props.comment.email}</div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div style={{ width: "400px" }}>{props.comment.body}</div>
      </div>
    </div>
  );
}
