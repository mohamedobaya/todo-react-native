import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@todos";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = action.payload;
      state.todos.push(todo);
      saveTodosToStorage(state.todos);
    },
    removeTodo: (state, action) => {
      const todoID = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoID);
      saveTodosToStorage(state.todos);
    },
    toggleTodo: (state, action) => {
      const todoID = action.payload;
      const todo = state.todos.find((todo) => todo.id === todoID);
      if (todo) {
        todo.status = todo.status === "Active" ? "Done" : "Active";
        // Save to AsyncStorage
        saveTodosToStorage(state.todos);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(loadTodos.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const loadTodos = createAsyncThunk("todos/loadTodos", async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Error loading todos:", e);
    return [];
  }
});

export const saveTodosToStorage = async (todos) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error("Error saving todos:", e);
  }
};

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
