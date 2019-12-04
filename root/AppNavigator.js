'use strict';
import { createStackNavigator,  } from "react-navigation";
import Drawer from './Drawer';
import DetailPage from '../src/page/DetailPage';
import LoginPage from '../src/page/LoginPage';

const close = {
  drawerLockMode: "locked-closed",  //禁止打开菜单
  gesturesEnabled: true,  //允许使用返回手势
}
const AppNavigator = createStackNavigator({
  LoginPage: {
    screen: LoginPage,
    navigationOptions: close
  },
  Details: {
    screen: DetailPage,
    navigationOptions: close
  },
  Main: {
    screen: Drawer,
    navigationOptions: { header: null }
  }
}, {
  initialRouteName: "Main",
  headerMode: 'screen',
  mode: 'modal',
  // mode: 'card',
  navigationOptions: { header: null }
});
export default AppNavigator;