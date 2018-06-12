import React, {Component} from 'react'

import CommInput from './CommInput'
import CommList from './CommList'

class CommApp extends Component {
    constructor(...args){
        super(...args)
        this.state = {comments: []}
    }

    componentWillMount(){
        this._loadComments()
    }

    _loadComments(){
        let comments = localStorage.getItem('comments')
        if(comments){
            comments = JSON.parse(comments)
            this.setState({comments})
        }
    }

    _saveComments(comments){
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    handDeleteComment (index){
        console.log(index);
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({comments})
        this._saveComments(comments)
    }

    handleSubmitComment(comment){
        if(!comment) return
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments.concat(comment);
        this.setState({comments: comments});
        this._saveComments(comments)
    }

    render(){
        return (
            <div className="wrapper">
                <CommInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommList 
                    comments={this.state.comments}
                    onDeleteComment={this.handDeleteComment.bind(this)} />
            </div>
        )
    }
}

export default CommApp;
