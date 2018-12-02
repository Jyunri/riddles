import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Questions from './Questions';
import NewQuestion from './Modal/NewQuestion';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCredits: 10,
      createQuestion: false,
      currentQuestion: {},
      cardIndex: 0,
    };
  }

  // modal to create question
  openCreateQuestionModal = () => this.setState({ createQuestion: true });

  // TODO: Setar isso no firebase, ou em algum cache
  setAsAnswered() {
    question = this.state.currentQuestion;
    question.answered = true;
    new_data = this.state.data;
    new_data[question.id] = question;
    this.setState({ data: new_data });
  }

  hasCredits() {
    return this.state.currentCredits - 1 >= 0
  }

  triggerQuestionSwipeLeft() {
    if(this.hasCredits()){
      this.refs.questions.swipeLeft();
      this.decrementCredits();
    } else {
      Alert.alert('Voce nao tem mais creditos! Crie uma pergunta para ganhar mais')
    }
  }
  
  triggerQuestionSwipeRight() {
    if(this.hasCredits()){
      this.refs.questions.swipeRight();
      this.decrementCredits();
    } else {
      Alert.alert('Voce nao tem mais creditos! Crie uma pergunta para ganhar mais')
    }
  }

  decrementCredits() {
    cardIndex = this.refs.questions.getNextIndex();
    currentCredits = this.state.currentCredits;
    this.setState({currentCredits: currentCredits - 1, cardIndex})
  }

  render() {
    return (
      <View style={{ flex: 8, backgroundColor: 'purple' }}>
        <NewQuestion createQuestion={this.state.createQuestion} />
        <View style={{ flex: 6 }}>
          <Questions ref="questions" cardIndex={this.state.cardIndex} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 20 }}>
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
            onPress={() => this.triggerQuestionSwipeRight()} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{`${this.state.currentCredits} Creditos restantes`}</Text>
        </View>
      </View>
    );
  }
}
