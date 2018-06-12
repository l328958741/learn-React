import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    render(){
        return (
            <div>
                <span style={{color: this.props.themeColor}}>我的小人书数目</span>
            </div>
        )
    }
}