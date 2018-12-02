// Libs
import React, { Component } from 'react';
import { 
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

// Components
import Questions from './Questions';
import NewQuestion from './Modal/NewQuestion';

// Redux
import { setCreateQuestion } from '../actions/FeedActions'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCredits: 10,
      createQuestion: true,
      cardIndex: 0,
    };
  }

  // modal to create question
  openCreateQuestionModal = () => this.props.setCreateQuestion(true);

  triggerQuestionSwipeLeft() {
    this.refs.questions.getWrappedInstance().swipeLeft();
  }
  
  triggerQuestionSwipeRight() {
    this.refs.questions.getWrappedInstance().swipeRight();
  }

  render() {
    return (
      <View style={{ flex: 8, backgroundColor: 'purple' }}>
        <NewQuestion createQuestion={this.state.createQuestion} />
        <View style={{ flex: 6 }}>
          <Questions ref="questions" />
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
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{`${this.props.currentCredits} Creditos restantes`}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    currentCredits: state.FeedReducer.currentCredits,
    senha: state.FeedReducer.senha
  }
)

export default connect(mapStateToProps, {setCreateQuestion})(Feed)