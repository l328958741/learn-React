import {createStore} from 'redux'

let store = createStore(function(state={
    userCount: 0,
    companyCount: 0
    }, action){
    switch(action.type){
      case 'addUser' :
        state.userCount = state.userCount+1;
        return state
      case 'addCompany' :
        state.companyCount = state.companyCount+1;
        return state
      default:
        return state
    }
  })
  
export default store