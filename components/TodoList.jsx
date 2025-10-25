import { FlatList } from "react-native";
import { styles } from "../assets/styles/styles";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleTaskStatus, handleTaskDelete }) => {
  return (
    <FlatList
      style={styles.todosContainer}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          item={item}
          handleTaskStatus={handleTaskStatus}
          handleTaskDelete={handleTaskDelete}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TodoList;
