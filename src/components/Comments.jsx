import { useSelector } from "react-redux";
import { Comment } from "./Comment";
import { useState } from "react";
import { NewCommentForm } from "./NewCommentForm";
export function Comments(props) {
  const [isOpen, setIsOpen] = useState(false);

  const comments = useSelector((state) => state.comments);
  return (
    <>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <button onClick={() => setIsOpen(true)}>Add a new Comment</button>
      </div>
      {isOpen && (
        <NewCommentForm
          commentsLength={comments.length}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
}
