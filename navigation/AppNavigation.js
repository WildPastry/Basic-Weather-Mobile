// imports
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Header from '../screens/Header';
import App from '../App';

const AppNavigation = createStackNavigator(
  {
    App: {
      screen: App,
      navigationOptions: {
        header: null
      }
    },
    Header: {
      screen: Header,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default AppNavigation;
