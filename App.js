import React from 'react';
import {TabNavigator} from 'react-navigation';
 import {Home} from './Screens/Home';
import {Heroes} from './Screens/Heroes';
import {Settings} from './Screens/Settings';
 const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#5469A1',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#5469A1',
    },
     labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 5,
    }
  }
});
 export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
} 