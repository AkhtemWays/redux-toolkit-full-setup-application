import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ["помыть полы", "найти работу", "если не найду идти в пятёрочку"],
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos.pop();
    },
  },
});

export default toolkitSlice.reducer;

export const {
  increment,
  decrement,
  addTodo,
  removeTodo,
} = toolkitSlice.actions;
