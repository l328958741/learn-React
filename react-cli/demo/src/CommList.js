import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Comm from './Comm'

class CommList extends Component {
    static defaultProps = {
        comments: []
    }

    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }

    render(){        
        return (
            <div>{this.props.comments.map((comment, index) => {
                return <Comm 
                    index={index} 
                    key={index} 
                    comment={comment}
                    onDeleteComment={this.handleDeleteComment.bind(this)} />
            })}</div>
        )
    }
}

CommList.propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
}

export default CommList