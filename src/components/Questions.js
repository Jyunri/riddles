// Libs
import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { connect } from 'react-redux';

// Redux
import { setCurrentCredits } from '../actions/FeedActions'

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {id: 0, question: 'desloquei meu ombro', answer: 'macarrao', user: 'jimy', answered: false },
        {id: 1, question: 'fiz tatuagem', answer: 'titanic', user: 'dri', answered: false  },
        {id: 2, question: 'dei pt no carro', answer: 'lol', user: 'ale', answered: false  },
        {id: 3, question: 'bati minha cabeca no gongo', answer: '20', user: 'diogo', answered: true  },
        {id: 4, question: 'fui quase processado', answer: 'outback', user: 'tomino', answered: false  },
        {id: 5, question: 'fui otaku', answer: 'macarrao', user: 'yoji', answered: false  },
        {id: 6, question: 'fui boyking', answer: 'titanic', user: 'kazu', answered: false  },
        {id: 7, question: 'tive uma namorada loka', answer: 'futebol', user: 'jonathan', answered: false  },
        {id: 8, question: 'morei no eua', answer: '30', user: 'alex', answered: false  },
        {id: 9, question: 'derrubei o banco', answer: 'quero', user: 'refri', answered: false  },
        {id: 10, question: 'virei na empresa subindo tabela', answer: 'quero', user: 'robs', answered: false  },
        {id: 11, question: 'tive megazord', answer: 'quero', user: 'zocolau', answered: false  },
        {id: 12, question: 'fiz uma serie de tv', answer: 'quero', user: 'chris', answered: false  },
      ],
    };
  }

  getSwiper() {
    return this.refs.swiper;
  }
  
  hasCredits() {
    return this.props.currentCredits - 1 >= 0
  }

  swipeLeft() {
    if(this.hasCredits()){
      this.getSwiper().swipeLeft();
    } else {
      Alert.alert('Voce nao tem mais creditos! Crie uma pergunta para ganhar mais');
    }
  }

  swipeRight() {
    if(this.hasCredits()){
      this.getSwiper().swipeRight();
    } else {
      Alert.alert('Voce nao tem mais creditos! Crie uma pergunta para ganhar mais');
    }
  }

  // TODO: Atualizar no BD tambem
  decrementCredits() {
    this.props.setCurrentCredits(this.props.currentCredits - 1);
    if(!this.hasCredits()){
      Alert.alert('Voce nao tem mais creditos! Crie uma pergunta para ganhar mais');
    }
  }

  render() {
    return (
      <View>
        <Swiper
          ref = "swiper"
          cards={this.state.cards}
          renderCard={(card) => {
            return (
              <View style={styles.card}>
                <Text style={styles.text}>
                  <Text style={{color: 'purple'}}>
                    Eu NUNCA...
                  </Text>
                  {card.question}
                </Text>
              </View>
            )
          }}
          onSwiped={(_cardIndex) => {
            this.decrementCredits();
          }}
          cardIndex={this.props.cardIndex}
          backgroundColor={'#4FD0E9'}
          stackSize={2}
          showSecondCard
          infinite
          disableTopSwipe
          disableBottomSwipe
          disableLeftSwipe={!this.hasCredits()}
          disableRightSwipe={!this.hasCredits()} 
          >
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
    height: '50%',
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    backgroundColor: "transparent"
  }
});

const mapStateToProps = state => (
  {
    cardIndex: state.FeedReducer.cardIndex,
    currentCredits: state.FeedReducer.currentCredits,
  }
)

export default connect(mapStateToProps, { setCurrentCredits }, null,  { withRef: true })(Questions)