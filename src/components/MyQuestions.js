import React, { Component } from 'react';
import { 
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class MyQuestions extends Component {
  state = {
    data: {
      0: { id: 0, question: 'Qual a minha comida favorita?', answer: 'macarrao', answerCount: 10},
      1: { id: 1, question: 'Qual o meu filme favorito?', answer: 'titanic', answerCount: 30},
      2: { id: 2, question: 'O que eu mais gosto de jogar?', answer: 'lol', answerCount: 50},
      3: { id: 3, question: 'Qual a minha idade?', answer: '20', answerCount: 11},
      4: { id: 4, question: 'Restaurante favorito?', answer: 'outback', answerCount: 10},
    },
  };

  // TODO: Setar isso no firebase, ou em algum cache
  removeQuestionFromState(item) {
    new_data = this.state.data;
    delete new_data[item.id];
    this.setState({ data: new_data });
  }

  renderItem = ({ item }) => {
    if(!item.answered) {
      return (
        <TouchableOpacity onPress={() => { this.removeQuestion(item); }}>
          <View style={styles.listItem}>
            <View style={styles.listQuestion}>
              <Text style={styles.listText}>{item.question}</Text>
              <Text style={styles.listText2}>{item.answer}</Text>
              <Text style={styles.listText2}>{`${item.answerCount} respostas`}</Text>
            </View>
            <View style={styles.listAvatar}>
              <Icon name='delete' size={25} color={'purple'}/>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }

  removeQuestion(item) {
    Alert.alert(
      'Voce gostaria de remover essa pergunta?',
      null,
      [
        {text: 'Cancel', onPress: () => {style: 'cancel'}},
        {text: 'OK', onPress: () => this.removeQuestionFromState(item)},
      ],
      { cancelable: true }
    )
  }

  render() {
    return (
      <View style={{ backgroundColor: 'purple' }}>
        <FlatList
          contentContainerStyle={styles.list}
          data={Object.values(this.state.data)}
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
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#e5bff2',
    marginTop: 20,
    padding: 30,
  },
  listAvatar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listQuestion: {
    marginLeft: 20,
    flex: 3,
    justifyContent: 'center',
  },
  listText: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 15,
  },
  listText2: {
    color: 'purple',
    fontSize: 15,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#DCDCDC",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    marginHorizontal: 40,
    marginVertical: 120
  },
  description: {
    padding: 20,
    fontSize: 18
  },
  modalButtons: {
    marginVertical: 20,
    flexDirection: 'row',
  }
});