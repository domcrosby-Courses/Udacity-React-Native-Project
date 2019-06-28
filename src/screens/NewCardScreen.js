/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button } from '../Components';
import { addCard } from '../ducks/decks';

class NewCardScreen extends Component {
  state = {
    question: '',
    answer: '',
    disabled: true
  };

  onChangeQ = question => {
    this.setState({ question });
    const { answer } = this.state;
    const disabled = question.length * answer.length === 0;
    this.setState({ disabled });
  };

  onChangeA = answer => {
    this.setState({ answer });
    const { question } = this.state;
    const disabled = question.length * answer.length === 0;
    this.setState({ disabled });
  };

  onPress = () => {
    const { question, answer } = this.state;
    const { actionAddCard, navigation } = this.props;
    const { title } = navigation.state.params;
    actionAddCard({
      title,
      question,
      answer
    });
    navigation.goBack();
    // this.props.navigation.navigate('QuizOverview', { title });
  };

  render() {
    const { disabled } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Input
            fieldLabel="Question"
            maxLength={50}
            placeholder="Enter Question"
            onChangeText={question => this.onChangeQ(question)}
          />
          <Input
            fieldLabel="Answer"
            maxLength={50}
            placeholder="Enter Answer"
            onChangeText={answer => this.onChangeA(answer)}
          />
          <Button onPress={() => this.onPress()} disabled={disabled}>
            Add Card
          </Button>
        </View>
      </ScrollView>
    );
  }
}

NewCardScreen.navigationOptions = {
  title: 'Add Card'
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
  { actionAddCard: addCard }
)(NewCardScreen);
