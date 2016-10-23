import * as types from '../constants/ActionTypes';
import request from '../utils/HttpServices';
import * as host from '../constants/Urls';

export function receiveNews(data) {

  return {
    type: types.NEWS_VIEW,
    data
  }
}

export function getNewsByID(id='') {

  return (dispatch , getState) => {
    request(host.BASE_NEWS_URL + id)
    .then(json =>{
      var data=json;
      dispatch(receiveNews(data))
    })
    .catch( msg =>{
      dispatch(receiveNews(null))
      console.log(msg)
    })
  }
}
