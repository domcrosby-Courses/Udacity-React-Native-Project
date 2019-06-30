/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button } from '../Components';
import { addDeck } from '../ducks/decks';

class NewDeckScreen extends Component {
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
    const { actionAddDeck, navigation } = this.props;
    actionAddDeck({ title });
    this.setState({ title: '', disabled: true });
    navigation.navigate('deckScreen', {
      title
    });
    // this.props.navigation.navigate('QuizOverview', { title });
  };

  render() {
    const { disabled, title } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Input
          fieldLabel="Deck Title"
          maxLength={50}
          placeholder="Enter Deck Title"
          value={title}
          onChangeText={deckName => this.onChange(deckName)}
        />
        <Button onPress={() => this.onPress()} disabled={disabled}>
          Add Deck
        </Button>
      </ScrollView>
    );
  }
}

NewDeckScreen.navigationOptions = {
  title: 'Add Deck'
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
  { actionAddDeck: addDeck }
)(NewDeckScreen);

// const propTypes = {};

// const defaultProps = {};

// NewDeck.propTypes = propTypes;
// NewDeck.defaultProps = defaultProps;
