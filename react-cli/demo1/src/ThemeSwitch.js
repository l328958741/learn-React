import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux';

class ThemeSwitch extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }

    handleChangeColor(color){
        console.log(1);
        if(this.props.onSwitchColor){
            console.log(2);
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleChangeColor.bind(this, 'red')}>Read</button>
                <button
                    onClick={this.handleChangeColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    console.log('change:' + state.themeColor);
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            console.log(3);
            dispatch({type: 'update_color', color: color})
        }
    }
}

ThemeSwitch = connect(mapStateProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch