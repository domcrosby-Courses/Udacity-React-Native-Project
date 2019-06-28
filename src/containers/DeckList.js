import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDeck } from '../ducks/decks';
import { DeckInfo } from '../Components';

const propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired
};

const defaultProps = {};

class DeckList extends Component {
  renderDecks() {
    const { decks } = this.props;
    return decks.map(deck => <DeckInfo key={deck.title} deck={deck} />);
  }

  render() {
    return <View>{this.renderDecks()}</View>;
  }
}

const mapStateToProps = state => {
  const { decks } = state;
  return {
    decks: Object.values(decks)
  };
};

export default connect(
  mapStateToProps,
  { actionAddDeck: addDeck }
)(DeckList);

DeckList.propTypes = propTypes;
DeckList.defaultProps = defaultProps;
