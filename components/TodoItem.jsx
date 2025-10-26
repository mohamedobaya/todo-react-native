import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../Router/paths";
import { styles } from "../assets/styles/styles";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/slices/todos.slice";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate(PATHS.TODO_SCREEN, { item: item })}
    >
      <View
        style={{
          width: "90%",
          marginHorizontal: "auto",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* task-item */}
          <View>
            <Text
              style={[
                { fontSize: 22, fontWeight: "bold" },
                item.status === "Done" && styles.doneTodo,
              ]}
            >
              {item.title}
            </Text>
            <Text style={item.status === "Done" && styles.doneTodo}>
              {item.description}
            </Text>
          </View>
          {/* task-actions */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 30,
            }}
          >
            {item.status === "Active" ? (
              <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                <Feather name="check-circle" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                <Feather name="minus-circle" size={24} color="black" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => dispatch(removeTodo(item.id))}>
              <Feather name="trash" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dividerLine} />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
