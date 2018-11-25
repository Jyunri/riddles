import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default class Matches extends Component {
  state = {
    data: [
      { id: 1, user: 'Jimy Suenaga', image: 'https://github.com/jyunri.png', questionsCount: 10, answersMatches: 10  },
      { id: 2, user: 'Alexandre Pedroso', image: 'https://github.com/alempedroso.png', questionsCount: 10, answersMatches: 9  },
      { id: 3, user: 'Diogo Felix', image: 'https://github.com/onlurking.png', questionsCount: 7, answersMatches: 4  },
    ],
  };

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
     <Card
        title={`${item.user} <3`}
        image={{uri: item.image}}>
        <Text style={styles.listText}>
          {`Das ${item.questionsCount} perguntas dele(a), voce deu match com ${item.answersMatches} respostas!`}
        </Text>
        <TouchableOpacity
          style={styles.msgButton}
          onPress={() => alert('em construcao')}
          underlayColor='#fff'>
            <Text style={styles.msgText}>Ver Perfil</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );

  render() {
    return (
      <View style={{ backgroundColor: 'purple' }}>
        <FlatList
          style={{ marginVertical: 50 }}
          contentContainerStyle={styles.list}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  listItem: {
    backgroundColor: '#e5bff2',
    marginTop: 20,
  },
  listText: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'center',
  },
  msgButton: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'purple',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  msgText: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  }
});
