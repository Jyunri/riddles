// Libs
import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { connect } from 'react-redux';
import firebase from '../infra/firebase';

// Redux
import { setCurrentCredits, setCurentCards } from '../actions/FeedActions';

class Questions extends Component {
  componentWillMount() {
    this.database = firebase.database();
    this.fetchCards();
  }

  fetchCards() {
    const featRef = firebase.database().ref('feats');
    featRef.orderByChild('users/jimy').equalTo(true).on('value', (snapshot) => {
      this.props.setCurentCards(Object.values(snapshot.val()));
    });
  }

  getSwiper() {
    return this.refs.swiper;
  }

  getCardColor(gender) {
    switch (gender) {
      case 'male':
        return 'lightblue';
      case 'female':
        return 'pink';
      default:
        return 'white';
    }
  }
  
  hasCredits() {
    return this.props.currentCredits - 1 >= 0;
  }

  swipeLeft() {
    if (this.hasCredits()) {
      this.getSwiper().swipeLeft();
    } else {
      Alert.alert('Voce nao tem mais creditos! Crie uma pergunta para ganhar mais');
    }
  }

  swipeRight() {
    if (this.hasCredits()) {
      this.getSwiper().swipeRight();
    } else {
      Alert.alert('Voce nao tem mais creditos! Crie uma pergunta para ganhar mais');
    }
  }

  // TODO: Atualizar no BD tambem
  decrementCredits() {
    this.props.setCurrentCredits(this.props.currentCredits - 1);
    if (!this.hasCredits()) {
      Alert.alert('Voce nao tem mais creditos! Crie uma pergunta para ganhar mais');
    }
  }

  renderCards() {
    const currentCards = this.props.currentCards;
    if (currentCards.length !== 0) {
      return (
        <Swiper
          ref="swiper"
          cards={currentCards}
          renderCard={(card) => (
            <View style={{ ...styles.card, backgroundColor: this.getCardColor(card.gender) }}>
              <Text style={styles.text}>
                <Text style={{ color: 'purple' }}>
                  Eu NUNCA...
                </Text>
                {card.description}
              </Text>
            </View>
          )}
          onSwiped={(_cardIndex) => {
            this.decrementCredits();
          }}
          onSwipedAll={() => Alert.alert('Acabou as proezas de hj. Volte mais tarde!')}
          onSwipedRight={() => false}
          cardIndex={this.props.cardIndex}
          backgroundColor={'purple'}
          stackSize={2}
          showSecondCard
          disableTopSwipe
          disableBottomSwipe
          disableLeftSwipe={!this.hasCredits()}
          disableRightSwipe={!this.hasCredits()}
        />
      );
    }
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' />
        <View style={{ margin: 10 }}>
          <Text style={styles.loadingText}>{'Carregando Proezas'}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderCards() }
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
    borderColor: 'white',
    justifyContent: 'center',
    height: '40%',
    backgroundColor: 'white',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: 'transparent'
  },
  loadingContainer: {
    margin: 20,
    padding: 20,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

const mapStateToProps = state => (
  {
    cardIndex: state.FeedReducer.cardIndex,
    currentCredits: state.FeedReducer.currentCredits,
    currentCards: state.FeedReducer.currentCards,
  }
);

export default connect(mapStateToProps, { setCurrentCredits, setCurentCards }, null, { withRef: true })(Questions)
;
