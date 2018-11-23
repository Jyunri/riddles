import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Profile from './src/components/Profile';
import Questions from './src/components/Questions';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Questions: Questions,
  Profile: Profile,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);