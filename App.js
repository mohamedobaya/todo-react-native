import { View } from "react-native";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import Router from "./Router/Router";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/* <Home /> */}
        <Router />
      </View>
    </Provider>
  );
};

export default App;
