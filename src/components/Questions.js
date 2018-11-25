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

// TODO: Retirar esse cara depois de adicionar o SWIPEABLEMODAL
import Modal from "react-native-modal";

export default class Question extends Component {
  state = {
    data: {
      0: { id: 0, question: 'Qual a minha comida favorita?', answer: 'macarrao', user: 'jimy', answered: false },
      1: { id: 1, question: 'Qual o meu filme favorito?', answer: 'titanic', user: 'dri', answered: false  },
      2: { id: 2, question: 'O que eu mais gosto de jogar?', answer: 'lol', user: 'ale', answered: false  },
      3: { id: 3, question: 'Qual a minha idade?', answer: '20', user: 'diogo', answered: true  },
      4: { id: 4, question: 'Restaurante favorito?', answer: 'outback', user: 'tomino', answered: false  },
      5: { id: 5, question: 'Qual a minha comida favorita?', answer: 'macarrao', user: 'yoji', answered: false  },
      6: { id: 6, question: 'Qual o meu filme favorito?', answer: 'titanic', user: 'kazu', answered: false  },
      7: { id: 7, question: 'O que eu mais gosto de jogar?', answer: 'futebol', user: 'jonathan', answered: false  },
      8: { id: 8, question: 'Qual a minha idade?', answer: '30', user: 'alex', answered: false  },
      9: { id: 9, question: 'Restaurante favorito?', answer: 'quero', user: 'refri', answered: false  },
      10: { id: 10, question: 'Restaurante favorito?', answer: 'quero', user: 'robs', answered: false  },
      11: { id: 11, question: 'Restaurante favorito?', answer: 'quero', user: 'zocolau', answered: false  },
      12: { id: 12, question: 'Restaurante favorito?', answer: 'quero', user: 'chris', answered: false  },
    },
    modalVisible: false,
    currentQuestion: {},
  };

  openModal = (item) => this.setState({ modalVisible: true, currentQuestion: item });
  closeModal = () => this.setState({ modalVisible: false });
  
  // TODO: Setar isso no firebase, ou em algum cache
  setAsAnswered() {
    question = this.state.currentQuestion;
    question.answered = true;
    new_data = this.state.data;
    new_data[question.id] = question;
    this.setState({ data: new_data });
  }

  renderItem = ({ item }) => {
    if(!item.answered) {
      return (
        <TouchableOpacity onPress={() => { this.openModal(item); }}>
          <View style={styles.listItem}>
            <View style={styles.listAvatar}>
              <Icon name='face' size={25} />
              <Text style={styles.listText}>{item.user}</Text>          
            </View>
            <View style={styles.listQuestion}>
              <Text style={styles.listText}>{item.question}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }

  checkAnswer() {
    if(this.state.currentAnswer === this.state.currentQuestion.answer) {
      Alert.alert(
        `Deu Match com ${this.state.currentQuestion.user} sz!`,
        'Confira na sua aba de matches!',
        [
          {text: 'OK', onPress: () => this.closeModal()},
        ],
        { cancelable: false }
      )
    } else {
      this.closeModal();
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: 'purple' }}>
        {/* TODO: USAR O COMPONENTE SWIPEABLEMODAL, COM REDUX */}
        <Modal
          isVisible={this.state.modalVisible}
          backdropOpacity={0.1}
          swipeDirection="left"
          onSwipe={this.closeModal}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.description}>
              {this.state.currentQuestion.question}
            </Text>
            <TextInput
              autoCapitalize = 'none' 
              placeholder={"Digite sua resposta aqui"}
              onChangeText={(currentAnswer) => this.setState({currentAnswer})}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={this.closeModal} />
              <Button title="OK!" onPress={() => {
                  this.checkAnswer();
                  this.setAsAnswered();
                }
              } />
            </View>
          </View>
        </Modal>
        <FlatList
          style={{ marginVertical: 20 }}
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
    marginRight: 20,
    flex: 1,
    alignItems: 'center',
  },
  listQuestion: {
    marginRight: 20,
    flex: 3,
    justifyContent: 'center',
  },
  listText: {
    color: 'purple',
    fontWeight: 'bold',
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