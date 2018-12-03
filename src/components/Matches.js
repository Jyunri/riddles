import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default class Matches extends Component {
  state = {
    data: [
      { id: 1, user: 'Robisnei', image: 'https://github.com/robisnei.png', questionsCount: 10, answersMatches: 10  },
      { id: 2, user: 'Alexandre Pedroso', image: 'https://github.com/alempedroso.png', questionsCount: 10, answersMatches: 9  },
      { id: 3, user: 'Yoji Kojio', image: 'https://github.com/yoji-kojio.png', questionsCount: 7, answersMatches: 4  },
    ],
  };

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
     <Card
        wrapperStyle={{ backgroundColor: 'purple' }}
        title={`${item.user} <3`}
        titleStyle={{ color: 'white' }}
        image={{uri: item.image}}>
        <Text style={styles.listText}>
          {`Voce deu bom com ${item.answersMatches} proezas dele(a)!`}
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
          style={{ marginVertical: 20 }}
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
    backgroundColor: 'white',
    marginVertical: 20,
  },
  listText: {
    color: 'white',
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
