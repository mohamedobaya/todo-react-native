import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATHS } from "./paths";
import Home from "../screens/Home";
import TodoScreen from "../screens/TodoScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator>
      <Screen
        name={PATHS.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name={PATHS.TODO_SCREEN}
        component={TodoScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default StackNavigator;
