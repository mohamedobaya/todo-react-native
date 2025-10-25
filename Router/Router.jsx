import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import { PATHS } from "./paths";
import StackNavigator from "./StackNavigator";
import CompletedScreen from "../screens/CompletedScreen";
const { Navigator, Screen } = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
          },
          tabBarLabelStyle: {
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
          },
          tabBarShowLabel: false, // Toggle label here
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            />
          ),
        }}
      >
        <Screen
          name={PATHS.STACK}
          component={StackNavigator}
          options={{
            headerTitle: "Todo App",
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
              <Feather name="home" size={24} color="black" />
            ),
          }}
        />
        <Screen
          name={PATHS.COMPLETED_SCREEN}
          component={CompletedScreen}
          options={{
            headerTitle: "Completed Tasks",
            tabBarIcon: ({ focused }) => (
              <Feather name="check-square" size={24} color="black" />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
