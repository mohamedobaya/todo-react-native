import { View, Keyboard } from "react-native";
import { useState } from "react";
import TodoList from "../components/TodoList";
import Header from "../layout/Header";
import NewTodo from "../components/NewTodo";
import Filters from "../components/Filters";
import { todosInitial, newTodoInitial } from "../data/initialData";

const Home = () => {
  // ------------- States -------------
  const [todos, setTodos] = useState(todosInitial);
  const [newTodo, setNewTodo] = useState(newTodoInitial);
  const [filter, setFilter] = useState("All");
  // Calculate displayedTodos based on filter
  const displayedTodos =
    filter === "All" ? todos : todos.filter((item) => item.status === filter);
  // ------------- Handlers -------------
  const handleTitle = (text) => {
    setNewTodo({ ...newTodo, title: text });
  };
  const handleDescription = (text) => {
    setNewTodo({ ...newTodo, description: text });
  };
  const handleFilter = (value) => {
    setFilter(value);
  };
  const handleAddTodo = () => {
    const newTodos = [...todos, { ...newTodo, id: todos.length + 1 }];
    setTodos(newTodos);
    setNewTodo(newTodoInitial);

    Keyboard.dismiss();
  };
  const handleTaskStatus = (id, newStatus) => {
    if (newStatus === "Done")
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, status: "Done" } : todo
        )
      );
    else
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, status: "Active" } : todo
        )
      );
  };
  const handleTaskDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <NewTodo
        newTodo={newTodo}
        handleTitle={handleTitle}
        handleDescription={handleDescription}
        handleAddTodo={handleAddTodo}
      />
      <Filters filter={filter} handleFilter={handleFilter} />
      <TodoList
        todos={displayedTodos}
        handleTaskStatus={handleTaskStatus}
        handleTaskDelete={handleTaskDelete}
      />
    </View>
  );
};

export default Home;
