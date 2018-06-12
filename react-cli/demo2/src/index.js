import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Header from './containers/Header'
import Content from './containers/Content'

const themeReducer = (state, action) => {
    if(!state){
        return {
            themeColor: 'green'
        }
    }

    switch(action.type){
        case 'update_color':
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
