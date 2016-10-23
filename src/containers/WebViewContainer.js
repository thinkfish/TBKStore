'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import WebViewPage from '../pages/WebViewPage'
import connectComponent from '../utils/ConnectComponent'

class WebViewContainer extends Component {

  render() {
    return (
      <WebViewPage {...this.props} />
    )
  }
}

const LayoutComponent = WebViewContainer
function mapStateToProps(state) {
  const {News} = state
  return { News }
}

export default connectComponent({ mapStateToProps, LayoutComponent })
