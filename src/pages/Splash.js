import React, {Component} from 'react';
import { Navigator, View, Text, StyleSheet, Image, ListView, DrawerLayoutAndroid, InteractionManager, Dimensions,
  TouchableHighlight, RefreshControl
} from 'react-native';

import MainContainer from '../containers/MainContainer';

var {height, width} = Dimensions.get('window');

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {navigator} = this.props;
    navigator.resetTo({
          component: MainContainer,
          name: 'Main'
        });

    // setTimeout(() => {
    //   InteractionManager.runAfterInteractions(() => {
    //     navigator.resetTo({
    //       component: MainContainer,
    //       name: 'Main'
    //     });
    //   });
    // }, 500);
  }

  render() {
    return (
      <Image
        style={{ flex: 1, width: width, height: height }}
        source={require('../images/reddit_splash.png') }
        />
    );
  }
}

export default Splash;