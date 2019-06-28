/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDeck } from '../ducks/decks';
import { Button } from '../Components';

const propTypes = {};

const defaultProps = {};

class DeckContainer extends Component {
  render() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;
    const { containerStyle, textStyle, bigTextStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={bigTextStyle}>{deck.title}</Text>
        <Text style={textStyle}>
          {`${deck.quizLength} Card${deck.quizLength === 1 ? '' : 's'}`}
        </Text>
        <Button style={bigTextStyle} onPress={() => navigation.navigate('newCardScreen', deck)}>
          Add Card
        </Button>
        <Button style={bigTextStyle} filled onPress={() => navigation.navigate('quizScreen', deck)}>
          Start a Quiz
        </Button>
      </View>
    );
  }
}

const styles = {
  bigTextStyle: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 32,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: '#222',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  containerStyle: {
    margin: 10
  }
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(DeckContainer);

DeckContainer.propTypes = propTypes;
DeckContainer.defaultProps = defaultProps;
