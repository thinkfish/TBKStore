import * as types from '../constants/ActionTypes';
import request from '../utils/HttpServices';
import * as host from '../constants/Urls';

export function receiveNewsList(json, getState) {
  let data=json.stories;
  let topData=json.top_stories;
  let oldList = (getState().Main && getState().Main.data && getState().Main.data.concat(data)) || data;

  return {
    type: types.MAIN_LIST,
    data: oldList,
    topData,
  }
}

// 首页列表
export function getNewsList(dateTime='') {
  return (dispatch , getState) => {
    request(host.BASE_URL + dateTime)
    .then(json =>{
      dispatch(receiveNewsList(json, getState))
    })
    .catch( msg =>{
      console.log(msg)
    })
  }
}

// 首页列表
export function getLatestNewsList() {
  return (dispatch , getState) => {
    request(host.BASE_URL + "latest")
    .then(json =>{
      dispatch(receiveNewsList(json, getState))
    })
    .catch( msg =>{
      console.log(msg)
    })
  }
}
