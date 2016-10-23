'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import Main from '../pages/Main';
import connectComponent from '../utils/ConnectComponent';

class MainContainer extends Component {

  render() {
    return (
      <Main {...this.props} />
    );
  }
}

const LayoutComponent = MainContainer;
function mapStateToProps(state) {
  return {
    Main: state.Main,
  }
}

export default connectComponent({mapStateToProps, LayoutComponent});