import React, { Component } from 'react';
import { 
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Questions from './Questions';

// TODO: Retirar esse cara depois de adicionar o SWIPEABLEMODAL
import Modal from "react-native-modal";

export default class Feed extends Component {
  state = {
    createQuestion: false,
    currentQuestion: {},
  };

  // modal to create question
  openCreateQuestionModal = () => this.setState({ createQuestion: true });
  closeCreateQuestionModal = () => this.setState({ createQuestion: false });

  // TODO: Setar isso no firebase, ou em algum cache
  setAsAnswered() {
    question = this.state.currentQuestion;
    question.answered = true;
    new_data = this.state.data;
    new_data[question.id] = question;
    this.setState({ data: new_data });
  }

  triggerQuestionSwipeLeft() {
    this.refs.questions.swipeLeft();
  }
  

  render() {
    return (
      <View style={{ flex: 6, backgroundColor: 'purple' }}>
        {/* TODO: MAIS UM MODAL PARA COMPONENTIZAR.. */}
        <Modal
          isVisible={this.state.createQuestion}
          backdropOpacity={0.1}
          swipeDirection="left"
          onSwipe={this.closeCreateQuestionModal}
          onBackdropPress={this.closeCreateQuestionModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.description}>
              {"Criar façanha!"}
            </Text>
            <View style={{alignItems: 'center'}}>
              <Text style={{lineHeight: 80}}>Eu jah..</Text>
              <TextInput
                autoCapitalize = 'none' 
                placeholder={"Digite sua façanha aqui"}
              />
            </View>
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={this.closeCreateQuestionModal} />
              <Button title="OK!" onPress={() => {
                  Alert.alert(
                    `Aqui tem que criar a pergutna de fato na base`,
                    '',
                    [
                      {text: 'Criar!', onPress: () => this.closeCreateQuestionModal() }
                    ],
                    { cancelable: false }
                  )
                }
              } />
            </View>
          </View>
        </Modal>
        <View style={{ flex: 3 }}>
          <Questions ref="questions"/>
        </View>
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
          <Icon
            raised
            name='remove'
            type='font-awesome'
            color='#f50'
            onPress={() => this.triggerQuestionSwipeLeft()} />
          <Icon
            raised
            name='add'
            color='purple'
            size={35}
            onPress={() => this.openCreateQuestionModal()} />
          <Icon
            raised
            name='check'
            type='font-awesome'
            color='green'
            onPress={() => this.refs.questions.swipeRight()} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
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
  },
});