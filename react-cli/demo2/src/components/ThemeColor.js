import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ThemeColor extends Component {
    static propTypes = {
        onSwitchColor: PropTypes.func
    }

    handleChangeColor(color){
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color)
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.handleChangeColor.bind(this, 'red')}>Red</button>
                <button onClick={this.handleChangeColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
}