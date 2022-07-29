import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const initialState = {
  todos: [] as Todo[],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
