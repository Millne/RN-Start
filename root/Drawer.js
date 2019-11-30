import { createDrawerNavigator } from 'react-navigation';
import AppNavigator from './AppNavigator';
import TabNav from './TabNav';

export default Drawer = createDrawerNavigator({
  Home: {
    screen: TabNav,
  }
},{
  drawerWidth: 220,
  drawerPosition: 'left', // 抽屉位置
  drawerBackgroundColor: 'white', // 抽屉背景色
  overlayColor: 'rgba(0,0,0,0.5)', // 抽屉剩余部分的背景色
  useNativeAnimations: true,  // 使用原生动画
  initialRouteName: 'Home',
  contentComponent: '', // 自定义抽屉内容
  lazy: true,
});