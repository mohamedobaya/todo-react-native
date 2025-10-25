import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../assets/styles/styles";
import Feather from "@expo/vector-icons/Feather";

const TodoItem = ({ item, handleTaskStatus, handleTaskDelete }) => {
  return (
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
            <TouchableOpacity onPress={() => handleTaskStatus(item.id, "Done")}>
              <Feather name="check-circle" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleTaskStatus(item.id, "Active")}
            >
              <Feather name="minus-circle" size={24} color="black" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => handleTaskDelete(item.id)}>
            <Feather name="trash" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dividerLine} />
    </View>
  );
};

export default TodoItem;
