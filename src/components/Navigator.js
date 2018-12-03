import React from 'react';
import { Platform, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Profile from './Profile';
import Feed from './Feed';
import Settings from './Settings';
import Matches from './Matches';

const TabNavigator = createBottomTabNavigator(
  {
    Proezas: {
      screen: Feed,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='list' size={25} color={tintColor} />)
      }
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='favorite' size={25} color={tintColor} />)
      }
    },
    Perfil: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='person' size={25} color={tintColor} />)
      }
    },
    // Settings: {
    //   screen: Settings,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (<Icon name='settings' size={25} color={tintColor} />)
    //   }
    // },
  },
  {
    tabBarOptions: {
      activeTintColor: 'purple',
      style: {
        backgroundColor: 'white',
        padding: 5
      }
    }
  }
);

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: (
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: "row",
            marginTop: Platform.OS == "ios" ? 20 : 0,
            paddingLeft: 30
          }}
        >
          <Icon name='transform' size={25} color={'purple'} />
          <Text style={{
            color: 'purple',
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: 20,
            marginLeft: 20,
            }}>Riddles</Text>
        </View>
      )
    },
  },
});

export default createAppContainer(StackNavigator);