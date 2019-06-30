/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../Components';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class QuizScreen extends Component {
  state = {
    qNo: 0,
    answer: false,
    correct: 0
  };

  onPress(tick = false) {
    const { deck } = this.props;
    const { qNo, correct } = this.state;
    const { questions } = deck;
    const qLength = questions.length;
    this.setState({ qNo: qNo + 1, answer: false });
    tick && this.setState({ correct: correct + 1 });
    qNo === qLength && clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { deck, navigation } = this.props;
    const { answer, qNo, correct } = this.state;
    const { questions } = deck;
    const qLength = questions.length;
    return (
      <ScrollView>
        {qNo === qLength ? (
          <View>
            <Text style={styles.bigTextStyle}>
              {` You Answered ${correct} correct out of ${qLength}`}
            </Text>
            <Button
              onPress={() =>
                this.setState({
                  qNo: 0,
                  answer: false,
                  correct: 0
                })
              }
            >
              Restart Quiz
            </Button>
            <Button filled onPress={() => navigation.goBack()}>
              Back to Deck
            </Button>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.textStyle}>{`${qNo + 1} / ${qLength}`}</Text>
            {!answer && (
              <View>
                <Text style={styles.bigTextStyle}>{questions[qNo].question}</Text>
                <Button filled onPress={() => this.setState({ answer: true })}>
                  Answer
                </Button>
              </View>
            )}
            {answer && (
              <View>
                <Text style={styles.bigTextStyle}>{questions[qNo].answer}</Text>
                <Button filled onPress={() => this.onPress(true)}>
                  Correct
                </Button>
                <Button onPress={() => this.onPress()}> InCorrect</Button>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    );
  }
}

QuizScreen.navigationOptions = {
  title: 'Quiz'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#fff'
  },
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
});

const mapStateToProps = (state, ownProps) => {
  const { decks } = state;
  const { navigation } = ownProps;
  const { title } = navigation.state.params;
  return {
    deck: decks[title],
    navigation
  };
};

export default connect(
  mapStateToProps,
  {}
)(QuizScreen);
