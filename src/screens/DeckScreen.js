/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Deck } from '../Containers';

class DeckScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Deck navigation={navigation} />
      </ScrollView>
    );
  }
}

DeckScreen.navigationOptions = {
  title: 'Deck'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = state => {
  const { decks } = state;
  return {
    decks
  };
};

export default connect(
  mapStateToProps,
  {}
)(DeckScreen);
