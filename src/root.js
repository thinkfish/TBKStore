import React, { Component} from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import connectComponent from './utils/ConnectComponent';
import reducers from './reducers';
import App from './containers/app';

//const YReaderApp = connectComponent(App); //把state 与 action 合并到 该控件里。
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);  //applyMiddleware来自redux可以包装 store 的 dispatch   //thunk作用是使action创建函数可以返回一个function代替一个action对象
const reducer = combineReducers(reducers); //接收一个对象并返回一个函数，当 combineReducers 被调用时，它会去调用每个// reducer，并把返回的每一块 state 重新组合成一个大 state 对象（也就是 Redux 中的 Store）。
const store = createStoreWithMiddleware(reducer);

export default class Root extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}