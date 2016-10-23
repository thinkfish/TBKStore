
import React, {Component} from 'react';
import { Navigator, View,Dimensions } from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {height, width} = Dimensions.get('window');

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      navStyle:null,
      titleStyle:'rgba(255, 251, 240,0 )'
    }
  }

  render() {
    
    const leftButtonConfig = {
      title: <Icon name="menu" size={24} />,
      tintColor:'white',
      handler: () => {
        this.props.openDrawer();
      },
    };

    const rightButtonConfig = {
      title: '刷新',
      tintColor:'white',
      handler: () => alert('hello!'),
    };

    const titleConfig = {
      title: '首页',
      tintColor:'white',
    };

    const statusBar  = {
      style : 'light-content',
      tintColor :'red',
    };

    

  //  const { data, downLoadStatus } = this.props.Chosen;

    return (
      <NavigationBar
        style={{ backgroundColor: 'rgb(51,15, 15)' }}
        title={titleConfig}
        leftButton={leftButtonConfig} />
    );
  }
}


export const LayoutComponent = NavBar;
export function mapStateToProps(state){
  return {
      Chosen : state.Chosen,
  }
}



