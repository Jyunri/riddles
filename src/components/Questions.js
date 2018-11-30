import React, { Component } from 'react';
import { 
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';

export default class Questions extends Component {
  state = {
    data: {
      0: { id: 0, question: 'Eu nunca ', answer: 'macarrao', user: 'jimy', answered: false },
      1: { id: 1, question: 'Eu nunca to', answer: 'titanic', user: 'dri', answered: false  },
      2: { id: 2, question: 'Eu nunca falei palavrao', answer: 'lol', user: 'ale', answered: false  },
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
    cards: [
      {id: 0, question: 'Eu jah desloquei meu ombro', answer: 'macarrao', user: 'jimy', answered: false },
      {id: 1, question: 'Eu jah fiz tatuagem', answer: 'titanic', user: 'dri', answered: false  },
      {id: 2, question: 'Eu jah dei pt no carro', answer: 'lol', user: 'ale', answered: false  },
      {id: 3, question: 'Eu jah bati minha cabeca no gongo', answer: '20', user: 'diogo', answered: true  },
      {id: 4, question: 'Eu jah fui quase processado', answer: 'outback', user: 'tomino', answered: false  },
      {id: 5, question: 'Eu jah fui otaku', answer: 'macarrao', user: 'yoji', answered: false  },
      {id: 6, question: 'Eu jah fui boyking', answer: 'titanic', user: 'kazu', answered: false  },
      {id: 7, question: 'Eu ja tive uma namorada loka', answer: 'futebol', user: 'jonathan', answered: false  },
      {id: 8, question: 'Eu ja morei no eua', answer: '30', user: 'alex', answered: false  },
      {id: 9, question: 'Eu ja derrubei o banco', answer: 'quero', user: 'refri', answered: false  },
      {id: 10, question: 'Eu ja virei na empresa subindo tabela', answer: 'quero', user: 'robs', answered: false  },
      {id: 11, question: 'Eu ja tive megazord', answer: 'quero', user: 'zocolau', answered: false  },
      {id: 12, question: 'Eu ja fiz uma serie de tv', answer: 'quero', user: 'chris', answered: false  },
    ],
  };

  swipeLeft() {
    this.refs.swiper.swipeLeft();
  }

  swipeRight() {
    this.refs.swiper.swipeRight();
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
                <Text style={styles.text}>{card.question}</Text>
              </View>
            )
          }}
          onSwiped={(cardIndex) => {console.log(cardIndex)}}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          stackSize= {2}
          showSecondCard
          infinite
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
    fontSize: 30,
    backgroundColor: "transparent"
  }
});