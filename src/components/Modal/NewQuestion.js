// Libs
import React, { Component } from 'react';
import { 
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import Modal from "react-native-modal";  // TODO: Retirar esse cara depois de adicionar o SWIPEABLEMODAL

// Redux
import { setCreateQuestion, setCurrentCredits } from '../../actions/FeedActions'

class NewQuestion extends Component {
  closeCreateQuestionModal = () => this.props.setCreateQuestion(false);
  incrementCredits = () => this.props.setCurrentCredits(this.props.currentCredits + 1);
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
            <Button title="Criar!" onPress={() => {
                Alert.alert(
                  `Beleza! Vamos ver se alguem ja cometeu essa façanha!`,
                  '',
                  [
                    {text: 'OK!', onPress: () => this.closeCreateQuestionModal() }
                  ],
                  { cancelable: false }
                );
                this.incrementCredits();
              }
            } />
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
  }
)

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

export default connect(mapStateToProps, {setCreateQuestion, setCurrentCredits})(NewQuestion)