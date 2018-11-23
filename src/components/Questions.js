import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight,
} from 'react-native';

export default class Questions extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.fonteDeDados = ds.cloneWithRows([
      { question: 'Qual a minha comida favorita?', answer: 'macarrao' },
      { question: 'Qual o meu filme favorito?', answer: 'titanic' },
      { question: 'O que eu mais gosto de jogar?', answer: 'futebol' },
      { question: 'Qual a minha idade?', answer: 'Nao respondida' },
      { question: 'Restaurante favorito?', answer: 'Nao respondida' },
    ]);
  }

  render() {
    return (
      <ListView
        style={styles.listContainer}
        dataSource={this.fonteDeDados}
        renderRow={data =>
          <View>
            <Text>Pergunta: {data.question}</Text>
            <Text>Resposta: {data.answer}</Text>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
  },
});
