import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import ThemeColor from './ThemeColor'

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    render(){
        return (
            <div>
                <span style={{color: this.props.themeColor}}>我的小人书</span>
                <ThemeColor />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps)(Content)