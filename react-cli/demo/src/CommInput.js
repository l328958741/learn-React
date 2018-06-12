import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommInput extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            content:''
        }
    }

    componentWillMount(){
        this._loadUsername()
    }

    componentDidMount(){
        this.textarea.focus();
    }

    _saveUsername(username){
        localStorage.setItem('username', username)
    }

    _loadUsername(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({username})
        }
    }

    handleUsernameChange(e){
        this.setState({username: e.target.value})
    }

    handleUsernameBlur(e){
        this._saveUsername(e.target.value)
    }

    handleContentChange(e){
        this.setState({content: e.target.value})
    }

    handleSubmit(){
        if(this.props.onSubmit){
            const {username, content} = this.state
            this.props.onSubmit({
                username: username,
                content:content,
                createdTime: +new Date()
            })
        }

        this.setState({content:''})
    }

    render(){
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username} 
                            onBlur={this.handleUsernameBlur.bind(this)}
                            onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={textarea => this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

CommInput.propTypes = {
    onSubmit: PropTypes.func
}


export default CommInput