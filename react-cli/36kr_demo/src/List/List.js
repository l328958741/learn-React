import React, {Component} from 'react'

import Mainlib from './Mainlib'
import Rightlib from './Rightlib'

class List extends Component {
    render(){
        return(
            <div className="index_36kr">
                <div className="pagewrap">
                <div className="mainlib_flex_wapper">
                    <Mainlib></Mainlib>
                    <Rightlib></Rightlib>
                </div>
                </div>
            </div>
        )
    }
}

export default List