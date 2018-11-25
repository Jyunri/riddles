import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://github.com/raphaelsantosj.png' }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.imageLabel}>Raphael</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text>Perguntas respondidas: 10</Text>
          <Text>Respostas recebidas: 30</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    margin: 50,
  },
  imageLabel: {
    fontSize: 20,
    marginTop: 10,
  },
  ratingContainer: {
    flex: 1,
    width: '80%',
  },
});
