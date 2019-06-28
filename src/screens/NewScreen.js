import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NewDeck } from '../Containers';

export default function NewScreen() {
  return (
    <ScrollView style={styles.container}>
      <NewDeck />
    </ScrollView>
  );
}

NewScreen.navigationOptions = {
  title: 'Links'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
