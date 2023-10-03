import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const response = await fetch("http://localhost:7000/todos");
    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
  }
);
export const addTodoAsync = createAsyncThunk(
  "todos/addTodosAsync",
  async (payload) => {
    const response = await fetch("http://localhost:7000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: payload.completed }),
    });
    if (response.ok) {
      const todo = await response.json();
      return { id: todo.id, completed: todo.completed };
    }
  }
);
export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log(payload);
      return { id: payload };
    }
  }
);
export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        return action.payload.todos;
      })
      .addCase(getTodosAsync.pending, (state, action) => {
        console.log("fetching data...");
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.push(action.payload.todo);
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        console.log(index);
        state[index].completed = action.payload.completed;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        console.log(action.payload);
        return state.filter((todo) => todo.id !== action.payload.id);
      });
  },
});

export default todosSlice.reducer;
