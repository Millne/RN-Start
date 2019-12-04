import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  static navigationOptions = {
    title: '首页',
    headerTitle: '首页',
    tabBarLabel: '首页',
  };
  render() {
    console.log(this.props.user);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        {
          this.props.isSuccess ?
            <View>
              <Text>用户名: {this.props.user.name}</Text>
              <Text>年龄: {this.props.user.age}</Text>
            </View>
          : <Button title="Sign In" onPress={() => this.props.navigation.navigate('LoginPage')}/>
        }
      </View>
    );
  }
}
const mapStateToProps = state => ({
  status: state.loginIn.status,
  isSuccess: state.loginIn.isSuccess,
  user: state.loginIn.user,
});
export default connect(mapStateToProps)(HomeScreen);