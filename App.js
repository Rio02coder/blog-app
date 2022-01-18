import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import indexScreen from "./src/screens";
import showScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/context/blogContext";

const navigator = createStackNavigator({
  Index: indexScreen,
  ShowScreen: showScreen
}, {
  initialRouteName: "Index",
  defaultNavigationOptions: {
    title: "Blogs"
  }
})

const App = createAppContainer(navigator)

export default () => {
  return(
    <Provider><App /></Provider>
  )
}
