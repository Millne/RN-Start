import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';

export default class MineScreen extends Component {
  static navigationOptions = {
    title: '我的',
    headerTitle: '我的',
    tabBarLabel: '我的',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Mine Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Details')}
      />
    </View>
    );
  }
}