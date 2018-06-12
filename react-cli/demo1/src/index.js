import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header'
import Content from './Content'
import {Provider} from './react-redux'

function createStore(reducer){
    let state = null
    const listeners = []
    const getState = () => state
    const subscribe = (listener) => {
        listeners.push(listener)
    }
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    dispatch({})
    return { getState, subscribe, dispatch }
}

function themeReducer(state, action){
    if(!state){
        return {
            themeColor: 'red'
        }
    }

    switch(action.type){
        case 'update_color':
        console.log(4);
            return {
                ...state,
                themeColor: action.color
            }
        default:
            return state
    }
}

const store = createStore(themeReducer)

class Index extends Component {
    render(){
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>, 
    document.getElementById('root')
);
