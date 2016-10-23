import React, {Component} from 'react';
import { Navigator, Platform, View, Image, DrawerLayoutAndroid } from 'react-native';

import NavBar from '../components/NavBar';
import Splash from '../pages/Splash';
import DateHelper from '../utils/Date';

class App extends Component {
  constructor(props) {
    super(props);
    DateHelper();
  }

  render() {
    //const { state, actions } = this.props;
    let defaultName = '首页';
    let defaultComponent = Splash;
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        renderScene={(route, navigator) => {
          console.log(route)
          let Component = route.component;
          return <Component {...this.props} {...route.params} navigator={navigator} />
        } }
        />
    )
  }
}

export default App;

