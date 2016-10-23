'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, PropTypes, WebView, BackAndroid, Dimensions, Text, Image, Platform,
  TouchableOpacity, View, ScrollView,InteractionManager
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import { ToastShort } from '../utils/ToastUtils';
import LoadingView from '../components/LoadingView';

let tag;
var canGoBack = false;
const {height, width} = Dimensions.get('window');

class WebViewPage extends Component {
  constructor(props) {
    super(props);
    this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
    this.onBack = this.onBack.bind(this);
    this.state = {
      isReset: false
    };
  }

  componentWillMount() {
    // if (Platform.OS === 'android') {
    //   tag = Portal.allocateTag();
    // }
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBack);
    }
    InteractionManager.runAfterInteractions(() => {
      this._getView(this.props.id);
    })

  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBack);
    }
    this._getView(0);
  }

  onNavigationStateChange(navState) {
    canGoBack = navState.canGoBack;
  }

  onBack() {
    const nav = this.props.navigator;
    const routers = nav.getCurrentRoutes();
    if (routers.length > 1) {
      nav.pop();
      return true;
    }
    return false;
  };


  _getView(id) {
    const { getNewsByID } = this.props.actions;
    getNewsByID(id);
  }


  renderLoading() {
    return <LoadingView />;
  }


  //   <WebView
  //     ref='webview'
  //     automaticallyAdjustContentInsets={false}
  //     style={{ flex: 1 }}
  //     source={{ uri: url }}
  //     javaScriptEnabled={true}
  //     domStorageEnabled={true}
  //     startInLoadingState={true}
  //     scalesPageToFit={true}
  //     decelerationRate="normal"
  //     onShouldStartLoadWithRequest={true}
  //     onNavigationStateChange={this.onNavigationStateChange}
  //     renderLoading={this.renderLoading.bind(this) }
  //     />
  render() {

    const {url, title, News} = this.props;

    const leftButtonConfig = {
      title: '返回',
      tintColor: 'white',
      handler: () => {
        this.onBack();
      },
    };

    const titleConfig = {
      tintColor: 'white',
      title: '',
    };
    var html = null;
    if (News.data != null) {
      html = '<!DOCTYPE html><html><head><link rel="stylesheet" href="' + News.data.css[0] + '"></head><body>';
      var arrHTML = News.data.body.split('<div class="img-place-holder">');
      html += arrHTML[0] + '<div class="img-place-holder" style="height:300px;	vertical-align:middle;overflow:hidden ;"><img  style="width:100%;margin-top: -18%; " src="' + News.data.image + '"/>';
      html += '<div style="position: absolute;top:190px;width:100%;background:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)),to( rgba(94,94,94,0.2)),color-stop(0.8, rgba(94,94,94,0.4)));"><p style="color:#FFF;font-size: 24px;padding:10px;height:28px;">' + News.data.title + ' </p><span style="color:#FFF;font-size: 16px;float:right;padding-right:12px;">' + News.data.image_source + ' </span> </div> ';
      html += arrHTML[1] + '</body></html>';
    } else {
      html = '<body></body>';
    }
    if (this.state.isReset == true) {
      html = '<body></body>';
    }

    return (

      <View style={styles.container}>
        <NavigationBar
          style={{ backgroundColor: 'rgb(51,15, 15)' }}
          title={titleConfig}
          leftButton={leftButtonConfig}
          />
        <WebView
          ref='webview'
          automaticallyAdjustContentInsets={false}
          style={{ flex: 1 }}
          source={{ html: html }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          decelerationRate="normal"
          onShouldStartLoadWithRequest={true}
          onNavigationStateChange={this.onNavigationStateChange}
          renderLoading={this.renderLoading.bind(this)}
          />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  spinner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)'
  },
  spinnerContent: {
    justifyContent: 'center',
    width: Dimensions.get('window').width * (7 / 10),
    height: Dimensions.get('window').width * (7 / 10) * 0.68,
    backgroundColor: '#fcfcfc',
    padding: 20,
    borderRadius: 5
  },
  spinnerTitle: {
    fontSize: 18,
    color: '#313131',
    textAlign: 'center'
  },
  shareContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    width: 40,
    height: 40
  }
});

export default WebViewPage;