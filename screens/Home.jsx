import { View, Keyboard, Platform } from "react-native";
import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import Header from "../layout/Header";
import NewTodo from "../components/NewTodo";
import Filters from "../components/Filters";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "../redux/slices/todos.slice";

const Home = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);
  const displayedTodos =
    filter === "All" ? todos : todos.filter((item) => item.status === filter);

  const handleFilter = (value) => {
    setFilter(value);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {Platform.OS !== "ios" && <Header />}
      <NewTodo />
      <Filters filter={filter} handleFilter={handleFilter} />
      <TodoList todos={displayedTodos} />
    </SafeAreaView>
  );
};

export default Home;
