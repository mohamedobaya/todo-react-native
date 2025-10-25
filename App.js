import { View } from "react-native";
import Home from "./screens/Home";
import Router from "./Router/Router";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* <Home /> */}
      <Router />
    </View>
  );
};

export default App;
