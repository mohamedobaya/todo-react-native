import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { SafeAreaView } from "react-native-safe-area-context";

const CompletedScreen = () => {
  const { todos } = useSelector((state) => state.todos);
  return (
    <SafeAreaView>
      <TodoList todos={todos.filter((todo) => todo.status === "Done")} />
    </SafeAreaView>
  );
};

export default CompletedScreen;
