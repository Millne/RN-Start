import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '首页',
    headerTitle: '首页',
    tabBarLabel: '首页',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}