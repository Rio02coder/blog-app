import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import indexScreen from "./src/screens";
import { BlogProvider } from "./src/context/blogContext";

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
    <BlogProvider><App /></BlogProvider>
  )
}
