import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      const newComment = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        body: action.payload.body,
      };
      state.push(newComment);
    },
    changeTitle: (state, action) => {
      const index = state.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state[index].name = action.payload.title;
    },
    deleteComment: (state, action) => {
      const id = action.payload;
      return state.filter((comment) => comment.id !== id);
    },
  },
});

export const { addComment, deleteComment, changeTitle } = commentSlice.actions;
export default commentSlice.reducer;
