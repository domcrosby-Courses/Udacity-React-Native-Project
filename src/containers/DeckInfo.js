/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
// Theoretically you would want to actually pass down
import { withNavigation } from 'react-navigation';
import DeckStats from './DeckStats';

const propTypes = {};

const defaultProps = {};

class DeckInfo extends Component {
  onPress = () => {
    const { deck, navigation } = this.props;
    const { title } = deck;
    navigation.navigate('deckScreen', {
      title
    });
  };

  render() {
    const { containerStyle } = styles;
    const { deck } = this.props;
    return (
      <TouchableOpacity style={containerStyle} onPress={() => this.onPress()}>
        <DeckStats id={deck.title} />
      </TouchableOpacity>
    );
  }
}

const styles = {
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
)(withNavigation(DeckInfo));

DeckInfo.propTypes = propTypes;
DeckInfo.defaultProps = defaultProps;
