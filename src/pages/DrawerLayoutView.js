
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

class DrawerLayoutView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoad: false
    }
  }

  componentDidMount() {
  }

  _getList(i = 0) {
    //触发state绘画
    // const { getLoadList } = this.props.actions;
    // getLoadList(i);

    //触发方法绘画。
    this.props.closeDrawer();

  }


  render() {
    const  IsLoad='fadeIn' ,delay=1000;

    console.log(this.state.IsLoad + "," + IsLoad+ ",");
    return (

      <View style={{ flex: 1, backgroundColor: 'rgba(52,56, 67, 1)' }}>
        <Image source= {{ uri: 'http://f.hiphotos.baidu.com/image/pic/item/00e93901213fb80e0ee553d034d12f2eb9389484.jpg' }} style={{ height: 200 }} />

        <View style={{ flex: 1 }}>
          <Icon.Button name="hot-tub" size={26} backgroundColor="transparent"  onPress={this._getList.bind(this) }>
            <Animatable.Text ref="view" animation={IsLoad} delay={delay}  style={[styles.text]}> Up and down you go</Animatable.Text>
          </Icon.Button>
          <Icon.Button name="hot-tub" size={26}  backgroundColor="transparent"  onPress={this._getList.bind(this) }>
            <Animatable.Text animation={IsLoad} delay={delay} style={[styles.text]}>Up and down you go</Animatable.Text>
          </Icon.Button>
          <Icon.Button name="hot-tub" size={26} backgroundColor="transparent"  onPress={this._getList.bind(this) }>
            <Animatable.Text animation={IsLoad} delay={600} style={[styles.text]}>Up and down you go</Animatable.Text>
          </Icon.Button>
          <Icon.Button name="hot-tub" size={26} backgroundColor="transparent"  onPress={this._getList.bind(this) }>
            <Animatable.Text animation={IsLoad} delay={800} style={[styles.text]}>Up and down you go</Animatable.Text>
          </Icon.Button>
          <Icon.Button name="hot-tub" size={26} backgroundColor="transparent"  onPress={this._getList.bind(this) }>
            <Animatable.Text animation={IsLoad} delay={1200} style={[styles.text]}>Up and down you go</Animatable.Text>
          </Icon.Button>
        </View>
      </View>

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
  text:
  {
    fontSize: 20,
    margin: 14,
    color: 'white'
  }
})

export default DrawerLayoutView;


// function mapStateToProps (state) {
//   const {DrawerLayoutView} = state;
//   return {
//     DrawerLayoutView
//   }
// }

// export default connect(mapStateToProps)(DrawerLayoutView);

