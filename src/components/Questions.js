import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Question extends Component {
  state = {
    data: [
      { id: 0, question: 'Qual a minha comida favorita?', answer: 'macarrao' },
      { id: 1, question: 'Qual o meu filme favorito?', answer: 'titanic' },
      { id: 2, question: 'O que eu mais gosto de jogar?', answer: 'futebol' },
      { id: 3, question: 'Qual a minha idade?', answer: 'Nao respondida' },
      { id: 4, question: 'Restaurante favorito?', answer: 'Nao respondida' },
      { id: 5, question: 'Qual a minha comida favorita?', answer: 'macarrao' },
      { id: 6, question: 'Qual o meu filme favorito?', answer: 'titanic' },
      { id: 7, question: 'O que eu mais gosto de jogar?', answer: 'futebol' },
      { id: 8, question: 'Qual a minha idade?', answer: 'Nao respondida' },
      { id: 9, question: 'Restaurante favorito?', answer: 'Nao respondida' },
    ],
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => { Alert.alert('Responder aqui'); }}>
      <View style={styles.listItem}>
          <View style={styles.listAvatar}><Icon name='person' size={25} /></View>
          <Text>{item.question}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{ backgroundColor: 'purple' }}>
        <FlatList
          style={{ marginVertical: 50 }}
          contentContainerStyle={styles.list}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#e5bff2',
    marginTop: 20,
    padding: 30,
  },
  listAvatar: {
    marginRight: 20,
  },
});