import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "../assets/styles/styles";

const TodoScreen = () => {
  const { params } = useRoute();
  const { item } = params;

  if (!params?.item)
    return (
      <View>
        <Text>No todo found</Text>
      </View>
    );
  return (
    <View style={{ flex: 1, margin: 20, marginVertical: 30 }}>
      <Text
        style={[
          { fontSize: 40, fontWeight: "bold", marginBottom: 20 },
          item.status === "Done" && styles.doneTodo,
        ]}
      >
        {item.title}
      </Text>
      <Text
        style={[{ fontSize: 20 }, item.status === "Done" && styles.doneTodo]}
      >
        {item.description}
      </Text>
    </View>
  );
};

export default TodoScreen;
