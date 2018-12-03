import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Tile, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import MyQuestions from './Modal/MyQuestions';

// Redux
import { showAnsweredQuestionsModal } from '../actions/ProfileActions'

class Profile extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'purple' }}>
        <MyQuestions />
        <Tile
          imageSrc={{ uri: 'https://github.com/raphaelsantosj.png'}}
          featured
          title={'RAPHAEL SANTOS'}
          caption={'raphaelsantosj@avisai.com'}
        />
        <View style={styles.listItem}>
          <Text style={styles.listText}>{'Quantidade de creditos: 10'}</Text>          
          <Text style={styles.listText}>{'Perguntas respondidas hoje: 10'}</Text>          
          <Text style={styles.listText}>{'Total de perguntas respondidas: 10'}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Button
            title='Perguntas criadas por mim'
            buttonStyle={ styles.button }
            onPress={ () => alert('em construcao') }
            raised
          />
          <Button
            title='Perguntas que eu respondi'
            buttonStyle={ styles.button }
            onPress={ () => this.props.showAnsweredQuestionsModal(true) }
            raised
          />
        </View>
        
        {/* <MyQuestions /> */}
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 4,
    backgroundColor: '#e5bff2',
    padding: 20,
  },
  listText: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
  },
  titleContainer: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'purple',
    width: 300,
    height: 45,
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  }
});

const mapStateToProps = state => (
  {
    showAnsweredQuestions: state.ProfileReducer.showAnsweredQuestions,
  }
)

export default connect(mapStateToProps, {showAnsweredQuestionsModal})(Profile)