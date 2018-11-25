import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Profile from './src/components/Profile';
import Questions from './src/components/Questions';
import Settings from './src/components/Settings';

const TabNavigator = createBottomTabNavigator({
  Questions: {
    screen: Questions,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='list' size={25} color={tintColor} />)
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='person' size={25} color={tintColor} />)
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='settings' size={25} color={tintColor} />)
    }
  },
},
{
  tabBarOptions: {
    style: {
      backgroundColor: '#e5bff2'
    }
  }
}
);

export default createAppContainer(TabNavigator);