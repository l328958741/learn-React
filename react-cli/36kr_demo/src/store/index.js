import {createStore} from 'redux';

export default createStore(function (state={
  list: [],
  page: 0
}, action){
  switch(action.type){
    case 'addFeedData':
      state.list=state.list.concat(action.arr);
      state.page++;
      return state;
    default:
      return state;
  }
});
