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
    this.cards = [
      {id: 0, question: 'desloquei meu ombro', answer: 'macarrao', user: 'jimy', answered: false, gender: 'male' },
      {id: 1, question: 'fiz tatuagem', answer: 'titanic', user: 'dri', answered: false, gender: 'female'  },
      {id: 2, question: 'dei pt no carro', answer: 'lol', user: 'ale', answered: false, gender: 'male'  },
      {id: 3, question: 'bati minha cabeca no gongo', answer: '20', user: 'diogo', answered: true, gender: 'male'  },
      {id: 4, question: 'fui quase processado', answer: 'outback', user: 'tomino', answered: false, gender: 'female'  },
      {id: 5, question: 'fiz dancefit', answer: 'macarrao', user: 'yoji', answered: false, gender: 'male'  },
      {id: 6, question: 'fui boyking', answer: 'titanic', user: 'kazu', answered: false, gender: 'male'  },
      {id: 7, question: 'tive uma namorada loka', answer: 'futebol', user: 'jonathan', answered: false, gender: 'male'  },
      {id: 8, question: 'morei no eua', answer: '30', user: 'alex', answered: false, gender: 'male'  },
      {id: 9, question: 'derrubei o banco', answer: 'quero', user: 'refri', answered: false, gender: 'female'  },
      {id: 10, question: 'virei na empresa subindo tabela', answer: 'quero', user: 'robs', answered: false, gender: 'male'  },
      {id: 11, question: 'tive megazord', answer: 'quero', user: 'zocolau', answered: false, gender: 'male'  },
      {id: 12, question: 'fiz uma serie de tv', answer: 'quero', user: 'chris', answered: false, gender: 'male'  },
    ];
  }

  getSwiper() {
    return this.refs.swiper;
  }

  getCardColor(gender){
    switch(gender) {
      case 'male':
        return 'lightblue';
      case 'female':
        return 'pink';
      default:
        return 'white';
    }
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
      <View style={styles.container}>
        <Swiper
          ref = "swiper"
          cards={this.cards}
          renderCard={(card) => {
            return (
              <View style={{...styles.card, backgroundColor: this.getCardColor(card.gender)}}>
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
          backgroundColor={'purple'}
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
  container: {
    flex: 1
  },
  card: {
    borderRadius: 4,
    borderWidth: 3,
    borderColor: "white",
    justifyContent: "center",
    height: '40%',
    backgroundColor: 'white',
    padding: 10,
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