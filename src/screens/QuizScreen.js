/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

class QuizScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Hello</Text>
      </ScrollView>
    );
  }
}

QuizScreen.navigationOptions = {
  title: 'Quiz'
};

const mapStateToProps = state => {
  const { decks } = state;
  return {
    decks
  };
};

export default connect(
  mapStateToProps,
  {}
)(QuizScreen);
