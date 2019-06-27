import React, { Component } from 'react';
// imrn
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// This is a middleware that solves aysnc in redux
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';
import AppNavigator from './navigation/AppNavigator';

// eslint-disable-next-line react/prefer-stateless-function
export default class AppContainer extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
