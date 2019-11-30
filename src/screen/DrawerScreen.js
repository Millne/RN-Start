import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';

export default class DrawerScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Drawer',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Drawer Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}