/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Theoretically you would want to actually pass down
import { withNavigation } from 'react-navigation';

const propTypes = {};

const defaultProps = {};

class DeckInfo extends Component {
  onPress = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('deckScreen', {
      deck
    });
  };

  render() {
    const { containerStyle, textStyle, bigTextStyle } = styles;
    const { deck } = this.props;
    return (
      <TouchableOpacity style={containerStyle} onPress={() => this.onPress()}>
        <Text style={bigTextStyle}>{deck.title}</Text>
        <Text style={textStyle}>
          {`${deck.quizLength} Card${deck.quizLength === 1 ? '' : 's'}`}
        </Text>
      </TouchableOpacity>
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
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
export default withNavigation(DeckInfo);

DeckInfo.propTypes = propTypes;
DeckInfo.defaultProps = defaultProps;
