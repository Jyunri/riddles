import React, { Component } from 'react';
import { 
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';

export default class Questions extends Component {
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

  swipeLeft() {
    this.getSwiper().swipeLeft();
  }

  swipeRight() {
    this.getSwiper().swipeRight();
  }

  getNextIndex() {
    return this.getSwiper().state.secondCardIndex;
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
          onSwiped={(cardIndex) => {}}
          cardIndex={this.props.cardIndex}
          backgroundColor={'#4FD0E9'}
          stackSize= {2}
          showSecondCard
          infinite
          disableTopSwipe
          disableBottomSwipe
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