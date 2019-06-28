/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../Components';
import DeckStats from './DeckStats';

const propTypes = {};

const defaultProps = {};

// TODO: This should not be a container as it is just a screen
class DeckContainer extends Component {
  render() {
    const { navigation, disabled } = this.props;
    const { title } = navigation.state.params;
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <DeckStats id={title} />
        <Button onPress={() => navigation.navigate('newCardScreen', { title })}>Add Card</Button>
        <Button
          filled
          disabled={disabled}
          onPress={() => navigation.navigate('quizScreen', { title })}
        >
          Start a Quiz
        </Button>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    margin: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const { decks } = state;
  const { title } = ownProps.navigation.state.params;
  return {
    disabled: decks[title].questions.length === 0
  };
};

export default connect(
  mapStateToProps,
  {}
)(DeckContainer);

DeckContainer.propTypes = propTypes;
DeckContainer.defaultProps = defaultProps;
