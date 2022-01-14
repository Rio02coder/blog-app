import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import indexScreen from "./src/screens";

const navigator = createStackNavigator({
  Index: indexScreen
}, {
  initialRouteName: "Index",
  defaultNavigationOptions: {
    title: "Blogs"
  }
})

const App = createAppContainer(navigator)

export default () => {
  return(
    <App />
  )
}
