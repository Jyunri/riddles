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
import { connect } from 'react-redux';
import Modal from "react-native-modal";  // TODO: Retirar esse cara depois de adicionar o SWIPEABLEMODAL

// Redux
import { showAnsweredQuestionsModal }  from '../../actions/ProfileActions'

class MyQuestions extends Component {
  constructor(props) {
    super(props);
    this.questions = [
      {id: 0, question: 'desloquei meu ombro', answer: 'macarrao', user: 'jimy', answered: false, gender: 'male' },
      {id: 2, question: 'dei pt no carro', answer: 'lol', user: 'ale', answered: false, gender: 'male'  },
      {id: 3, question: 'bati minha cabeca no gongo', answer: '20', user: 'diogo', answered: true, gender: 'male'  },
      {id: 11, question: 'tive megazord', answer: 'quero', user: 'zocolau', answered: false, gender: 'male'  },
      {id: 12, question: 'fiz uma serie de tv', answer: 'quero', user: 'chris', answered: false, gender: 'male'  },
    ];
  }

  // TODO: Setar isso no firebase, ou em algum cache
  removeQuestionFromState(item) {
    new_data = this.state.data;
    delete new_data[item.id];
    this.setState({ data: new_data });
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <View>
          <Text style={styles.listText}>{item.question}</Text>
        </View>
      </View>
    )
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

  closeModal = () => {
    this.props.showAnsweredQuestionsModal(false);
  }

  render() {
    return (
      <View style={{ backgroundColor: 'purple' }}>
        <Modal
          ref="modal"
          isVisible={this.props.showAnsweredQuestions}
          backdropOpacity={0.1}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <FlatList
              contentContainerStyle={styles.list}
              data={this.questions}
              renderItem={this.renderItem}
              keyExtractor={item => item.id.toString()}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={this.closeModal} />
            </View>
          </View>
        </Modal>
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


const mapStateToProps = state => (
  {
    showAnsweredQuestions: state.ProfileReducer.showAnsweredQuestions,
  }
)

export default connect(mapStateToProps, {showAnsweredQuestionsModal})(MyQuestions)