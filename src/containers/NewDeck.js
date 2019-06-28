import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Button } from '../Components';
import { addDeck } from '../ducks/decks';

// const propTypes = {};

// const defaultProps = {};

class NewDeck extends Component {
  state = {
    title: '',
    disabled: true
  };

  // use => functions to stop needing to bind
  onChange = title => {
    this.setState({ title });
    const disabled = title.length === 0;
    this.setState({ disabled });
  };

  onPress = () => {
    const { title } = this.state;
    const { actionAddDeck } = this.props;
    console.log('pressed');
    actionAddDeck(title);
    // navigation.navigate('QuizOverview');
    // this.props.navigation.navigate('QuizOverview', { title });
  };

  render() {
    console.log('rendering');
    console.log(this.props);
    const { title, disabled } = this.state;
    const { decks } = this.props;
    return (
      <View>
        <Input
          fieldLabel="Deck Title"
          maxLength={50}
          placeholder="Enter Deck Title"
          onChangeText={deckName => this.onChange(deckName)}
        />
        <Button onPress={() => this.onPress()} disabled={disabled}>
          Add Deck
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { decks } = state;
  return {
    decks
  };
};

export default connect(
  mapStateToProps,
  { actionAddDeck: addDeck }
)(NewDeck);

// NewDeck.propTypes = propTypes;
// NewDeck.defaultProps = defaultProps;
