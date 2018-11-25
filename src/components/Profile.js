import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Tile } from 'react-native-elements';

import Questions from './Questions';


class Profile extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'purple' }}>
        <Tile
          imageSrc={{ uri: 'https://github.com/raphaelsantosj.png'}}
          featured
          title={'RAPHAEL SANTOS'}
          caption={'raphaelsantosj@avisai.com'}
        />
        <View style={styles.listItem}>
          <Text style={styles.listText}>{'Numero de perguntas respondidas: 10'}</Text>          
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Minhas Perguntas</Text>
        </View>
        <Questions />
      </ScrollView>
    );
  }
}

export default Profile;


const styles = StyleSheet.create({
  listItem: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#e5bff2',
    padding: 30,
  },
  listText: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 15,
  },
  titleContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});