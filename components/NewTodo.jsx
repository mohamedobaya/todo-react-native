import { useState } from "react";
import { Keyboard } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "../assets/styles/styles";
import { addTodo } from "../redux/slices/todos.slice";

const newTodoInitial = {
  id: Date.now().toString(),
  title: "",
  description: "",
  status: "Active",
};

const NewTodo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState(newTodoInitial);

  const handleTitle = (text) => {
    setNewTodo({ ...newTodo, title: text });
  };
  const handleDescription = (text) => {
    setNewTodo({ ...newTodo, description: text });
  };
  const handleAddTodo = () => {
    // const newTodos = [...todos, { ...newTodo, id: todos.length + 1 }];
    // setTodos(newTodos);

    if (!newTodo.title) {
      alert("Missing Title");
      return;
    }
    if (!newTodo.description) {
      alert("Missing Description");
      return;
    }

    dispatch(addTodo({ ...newTodo, id: Date.now().toString() }));
    setNewTodo(newTodoInitial);

    Keyboard.dismiss();
  };
  return (
    <View
      style={{
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={styles.input}
        placeholder="Todo Title"
        value={newTodo.title}
        onChangeText={handleTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Todo Description"
        value={newTodo.description}
        onChangeText={handleDescription}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={handleAddTodo}>
        <Text style={styles.text}>add todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewTodo;
