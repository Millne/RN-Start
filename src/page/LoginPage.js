import React, { Component } from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import *as loginAction from '../store/actions/index';// 导入action方法

class LoginPage extends Component {
  static navigationOptions = {
    title: 'login',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        {
          this.props.isSuccess ?
            <Button title={this.props.status} onPress={() => this.props.navigation.goBack()} />
          : <Button title={this.props.status} onPress={() => this.props.login()} />
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
const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginAction.login()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);