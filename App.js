import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import indexScreen from "./src/screens";

const navigator = createStackNavigator({
  Index: indexScreen
}, {
  initialRouteName: "Index",
  defaultNavigationOptions: {
    title: "Blog"
  }
})

export default createAppContainer(navigator)
