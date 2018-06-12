import {connect} from 'react-redux'

import ThemeColor from '../components/ThemeColor'


const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({type: 'update_color', color: color})
        }
    }
}

export default  connect(null, mapDispatchToProps)(ThemeColor)