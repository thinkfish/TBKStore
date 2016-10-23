import React, { Component } from 'react'
import { Navigator, View, Text, StyleSheet, Image, ListView, DrawerLayoutAndroid, TouchableHighlight, RefreshControl, Dimensions, ScrollView } from 'react-native'

import connectComponent from '../utils/ConnectComponent'
import DrawerLayout from 'react-native-drawer-layout'

// import * as DrawerLayoutViewPage from './DrawerLayoutView'
import DrawerLayoutView from './DrawerLayoutView'
import WebViewContainer from '../containers/WebViewContainer'

import NavBar from '../components/NavBar'

import Icon from 'react-native-vector-icons/FontAwesome'
import ViewPager from 'react-native-viewpager'

import * as host from '../constants/Urls'

// const DrawerLayoutView = connectComponent(DrawerLayoutViewPage)
const {width, height} = Dimensions.get('window')
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
let imagesDS = new ViewPager.DataSource({ pageHasChanged: (p1, p2) => p1 !== p2 })
let i = true
let currentDate = new Date()
const BANNER_IMGS = [{ 'image': 'http:\/\/pic1.zhimg.com\/3ad8ac8eddaef52ef180e35fdce873b0.jpg', 'type': 0, 'id': 8888739, 'ga_prefix': '101607', 'title': '读读日报 24 小时热门 TOP 5 · 今年我强烈推荐的第四部国产片' }, { 'image': 'http:\/\/pic2.zhimg.com\/fe0ac1ce13d0622d96321ef144f879fd.jpg', 'type': 0, 'id': 8880567, 'ga_prefix': '101520', 'title': '大口喝水或倒立？阻止打嗝的科学方法就是这么奇特' }, { 'image': 'http:\/\/pic1.zhimg.com\/0cc796b97579edffaf048823f436a910.jpg', 'type': 0, 'id': 8886495, 'ga_prefix': '101517', 'title': '知乎好问题 · 普通家庭理财，需要哪些会计常识？' }, { 'image': 'http:\/\/pic4.zhimg.com\/85f14c04e98704de80a1072f09e68833.jpg', 'type': 0, 'id': 8882627, 'ga_prefix': '101508', 'title': '充电五分钟，蹦跶一整天：快充电池是这么回事儿' }, { 'image': 'http:\/\/pic2.zhimg.com\/5c2d8555e2b0804d28d67eda52c72491.jpg', 'type': 0, 'id': 8884981, 'ga_prefix': '101507', 'title': '手机炸了辞职去维权：「我觉得我是个傻子」' }]

export default class Chosen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRefreshing: false,
      drawer: null,
      imagesDS: imagesDS.cloneWithPages(BANNER_IMGS)
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this._getList(new Date().Format('yyyyMMdd'))
    }, 1000)
  }

  _getList(date) {
    const { getNewsList } = this.props.actions
    getNewsList(date)
  }

  OpenView(e, rowData) {
    const { navigator } = this.props

    if (navigator) {
      navigator.push({
        name: '详情',
        component: WebViewContainer,
        params: {
          url: host.BASE_NEWS_WEB_URL + rowData.id,
          id: rowData.id
        }
      })
    }

  }

  _handleScroll(e) {
    if (e.nativeEvent.contentSize.height - e.nativeEvent.layoutMeasurement.height - e.nativeEvent.contentOffset.y <= 30) {
      this._onReached()
    }

    // var alpha = (e.nativeEvent.contentInset.top + e.nativeEvent.contentOffset.y) / 500
    // if (alpha < 0) alpha = 0
    // if (alpha > 1) alpha = 1
    // var style = {
    //   backgroundColor: 'rgba(51,15, 15, ' + alpha + ')',
    // }

    // alpha = (e.nativeEvent.contentInset.top + e.nativeEvent.contentOffset.y) / 1200
    // if (alpha < 0) alpha = 0
    // if (alpha > 1) alpha = 1

    // titlestyle = 'rgba(255, 251, 240, ' + alpha + ')'

    // if (alpha <= 1) {
    //   this.refs["nav"].setState({
    //     navStyle: style,
    //     titleStyle: titlestyle
    //   })
    // }

    // var alpha = (e.nativeEvent.contentOffset.y )
    // if(alpha>=230)
    // {
    //   alpha=0
    // }else
    // {
    //   alpha=230-alpha
    // }
    // this.refs["vp"].setNativeProps({style:{height:alpha}})
  }

  _onRefresh() {
    this.setState({ isRefreshing: true })
    setTimeout(() => {
      let date = new Date(new Date().addDays(1)).Format('yyyyMMdd')
      this._getList(date)
      this.setState({ isRefreshing: false })
    }, 1500)
  }

  _onReached() {
    setTimeout(() => {
      let date = new Date(currentDate.addDays(-1)).Format('yyyyMMdd')
      this._getList(date)
    }, 1500)
  }

  _renderRow(rowData, rowHasChanged) {
    return (
      <TouchableHighlight underlayColor='#4169e1' onPress={(e) => { this.nextEvent(e, rowData) } }>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Image source={{ uri: rowData.images[0] }} style={{ height: 220 }} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 32, margin: 10 }}>
              {rowData.title}
            </Text>
            <Text style={{ fontSize: 18, marginLeft: 46, marginRight: 46, marginBottom: 10, textAlign: 'center' }}>
              你是否也陷入继续求学还是毅然就业的两难中？在这个物语而“反之”的时代选中赌博，视乎显然呆板且不合时宜，面对“复杂”的世界， 赌博是否有意义。
              {rowData + ':' + rowHasChanged}
              <Icon name='rocket' size={30} color='#900' />
            </Text>
            <View style={{ height: 1, width: 250, backgroundColor: '#987' }}></View>
            <Text style={{ fontSize: 24, margin: 20, textAlign: 'center' }}>
              1111
            </Text>
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
              <Text style={{ width: 50, textAlign: 'left' }}>
                XX 0
              </Text>
              <Text style={{ width: 50, textAlign: 'left' }}>
                XX 0
              </Text>
              <Text style={{ flex: 1 }}>
              </Text>
              <Text style={{ width: 120, textAlign: 'right' }}>
                阅读数：1111
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  _renderRow2(rowData, rowHasChanged) {
    return (
      <TouchableHighlight style={{ margin: 10, marginTop: 5, marginBottom: 5, textShadowRadius: 5 }} underlayColor='#4169e1' onPress={(e) => {
        requestAnimationFrame(() => { this.OpenView(e, rowData) })
      } }>
        <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <Text style={{ fontSize: 18, textAlign: 'left', width: width - 115 }}>
            {rowData.title}
          </Text>
          <Image style={{ height: 64, width: 64 }} source={{ uri: rowData.images[0] }} />
        </View>
      </TouchableHighlight>
    )
  }

  closeDrawer() {
    this.state.drawer.closeDrawer()
    const { getLoadList } = this.props.actions
    getLoadList()
  }

  openDrawer() {
    const { IsLoad } = this.props.actions
    i = i ? false : true
    var name = 'bounceInLeft'
    if (i == true) {
      name = 'bounceInLeft'
    } else {
      name = 'bounceInRight'
    }
    IsLoad(name, 1000)
    this.state.drawer.openDrawer()
  }

  _renderPage(rowData) {
    return (
      <TouchableHighlight underlayColor='#4169e1' onPress={(e) => {
        this.OpenView(e, rowData)
      } }>
        <View style={{}}>
          <Text style={{ top: 260, zIndex: 999, position: 'absolute', padding: 20, fontSize: 24, textAlign: 'left', width: width, color: '#fff' }}>
            {rowData.title}
          </Text>
          <Image source={{ uri: rowData.image }} style={{ flex: 1, height: 360, width: width, resizeMode: 'stretch' }} />
        </View>
      </TouchableHighlight>

    )
  }

  render() {
    const { data, topData, isDownLoadStatus } = this.props.Main
    let rows = null
    if (data != null) {
      rows = data.map((row, ii) => {
        return this._renderRow2(row, 1)
      })
    }

    return (
      <DrawerLayout drawerWidth={300} ref={(drawer) => {
        this.state.drawer = drawer;
      } } renderNavigationView={() => <DrawerLayoutView closeDrawer={this.closeDrawer.bind(this)} />}>
        <View style={{ flex: 1 }}>
          <NavBar ref='nav' openDrawer={this.openDrawer.bind(this)} />
          <ScrollView onScroll={this._handleScroll.bind(this)} refreshControl={<RefreshControl
            progressViewOffset={20}
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00" />}>
            <View ref='vp' style={{ height: 360 }}>
              <ViewPager
                style={{ height: 340 }}
                dataSource={this.state.imagesDS}
                renderPage={this._renderPage.bind(this)}
                isLoop={true}
                autoPlay={true} />
            </View>
            {rows}
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, margin: 10, textAlign: 'center' }}>
                正在加载...
              </Text>
            </View>
          </ScrollView>
        </View>
      </DrawerLayout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  list: {
    width: width

  }
})
