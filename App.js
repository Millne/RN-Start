import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';
import AppNavigator from './root/AppNavigator';
import configureStore from './src/store/index'

const AppContainer = createAppContainer(AppNavigator);
const store = configureStore();
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
