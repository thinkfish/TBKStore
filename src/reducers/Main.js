import * as types from '../constants/ActionTypes';

export default function Main(state = {}, action = {}) {

  switch (action.type) {
    case types.MAIN_LIST:
      return Object.assign(
        {}, state, {
          data: action.data,
          downLoadStatus: false
        }
      )
    default:
      return state;
  }
}
