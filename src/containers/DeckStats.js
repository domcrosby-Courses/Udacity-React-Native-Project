/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
// Theoretically you would want to actually pass down
import { withNavigation } from 'react-navigation';

const propTypes = {};

const defaultProps = {};

// eslint-disable-next-line react/prefer-stateless-function
class DeckStats extends Component {
  render() {
    const { textStyle, bigTextStyle } = styles;
    const { deck } = this.props;
    return (
      <View>
        <Text style={bigTextStyle}>{deck.title}</Text>
        <Text style={textStyle}>
          {`${deck.quizLength} Card${deck.quizLength === 1 ? '' : 's'}`}
        </Text>
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
  }
};

const mapStateToProps = (state, ownProps) => {
  const { decks } = state;
  const { id } = ownProps;
  const deck = decks[id];
  return {
    deck
  };
};

export default connect(
  mapStateToProps,
  {}
)(withNavigation(DeckStats));

DeckStats.propTypes = propTypes;
DeckStats.defaultProps = defaultProps;
