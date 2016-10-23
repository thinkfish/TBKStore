import * as types from '../constants/ActionTypes';

export default function News(state = {}, action = {}) {

  switch (action.type) {
    case types.NEWS_VIEW:
      return Object.assign(
        {}, state, {
          data: action.data
        }
      )
    default:
      return state;
  }
}
