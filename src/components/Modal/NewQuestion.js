// Libs
import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';  // TODO: Retirar esse cara depois de adicionar o SWIPEABLEMODAL
import firebase from '../../infra/firebase';

// Redux
import { setCreateQuestion, setCurrentCredits, setNewQuestion } from '../../actions/FeedActions';

class NewQuestion extends Component {
  closeCreateQuestionModal = () => this.props.setCreateQuestion(false);
  incrementCredits = () => this.props.setCurrentCredits(this.props.currentCredits + 1);
  saveQuestion(question) {
    const featRef = firebase.database().ref('feats');
    const entry = {
      description: question,
      gender: 'male',
      users: {
        jimy: true,
      }
    };
    featRef.push().set({
      entry
    });
  } 

  render() {
    return (
      <Modal
        ref="modal"
        isVisible={this.props.createQuestion}
        backdropOpacity={0.1}
        swipeDirection="left"
        onSwipe={this.closeCreateQuestionModal}
        onBackdropPress={this.closeCreateQuestionModal}
      >
        <View style={styles.modalContainer}>
          <View style={{ position: 'absolute', right: 1, top: 1 }}>
            <Icon type='font-awesome' name="times-circle" color='purple' onPress={() => this.closeCreateQuestionModal()} />
          </View>
          <Text style={styles.description}>
            {'Criar proeza!'}
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ lineHeight: 80 }}>Eu NUNCA..</Text>
            <TextInput
              autoCapitalize ='none' 
              placeholder={'Digite sua proeza aqui'}
              value={this.props.newQuestion}
              onChangeText={(question) => this.props.setNewQuestion(question)}
            />
          </View>
          <View style={styles.modalButtonsContainer}>
            <Button
buttonStyle={styles.modalButton} title="Criar!" onPress={() => {
                Alert.alert(
                  'Beleza! Vamos ver se alguem ja cometeu essa proeza!',
                  `Eu NUNCA ${this.props.newQuestion}`,
                  [
                    { text: 'OK!', onPress: () => {
                        this.saveQuestion(this.props.newQuestion);
                        this.props.setNewQuestion('');
                        this.closeCreateQuestionModal();
                      }
                    }
                  ],
                  { cancelable: false }
                );
                this.incrementCredits();
              }
            }
            />
          </View>
        </View>
      </Modal>
    );
  }
}  

const mapStateToProps = state => (
  {
    createQuestion: state.FeedReducer.createQuestion,
    currentCredits: state.FeedReducer.currentCredits,
    newQuestion: state.FeedReducer.newQuestion,
  }
);

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#DCDCDC',
    borderRadius: 4,
    borderColor: '#C0C0C0',
    borderWidth: 2,
    marginHorizontal: 40,
    marginVertical: 120,
  },
  description: {
    padding: 10,
    marginVertical: 10,
    fontSize: 18
  },
  modalButtonsContainer: {
    marginVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  modalButton: {
    width: '100%',
    backgroundColor: 'purple',
  },
});

export default connect(mapStateToProps, { setCreateQuestion, setCurrentCredits, setNewQuestion })(NewQuestion);
