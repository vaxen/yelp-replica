import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import DetailRestaurant from "./src/screens/DetailRestaurant";


const navigator = createStackNavigator({
  Search: SearchScreen,
  DetailRestaurant: DetailRestaurant
},{
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: "Yelp Replica"
  }
})

export default createAppContainer(navigator);