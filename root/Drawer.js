import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import AppNavigator from './AppNavigator';
import TabNav from './TabNav';

const { width } = Dimensions.get('window'); //解构赋值 获取屏幕宽度

export default Drawer = createDrawerNavigator({
  Home: {
    screen: TabNav,
  }
},{
  drawerWidth: width * 0.42,
  drawerPosition: 'left', // 抽屉位置
  drawerBackgroundColor: 'white', // 抽屉背景色
  overlayColor: 'rgba(0,0,0,0.5)', // 抽屉剩余部分的背景色
  useNativeAnimations: true,  // 使用原生动画
  initialRouteName: 'Home',
  contentComponent: '', // 自定义抽屉内容
  lazy: true,
});