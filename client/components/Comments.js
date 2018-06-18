import React, { Component } from 'react';

class Comments extends Component {
    renderComment(comment, i) {
        return (
            <div className='comment'>
                 <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className='remove-comment'>&times;</button>
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className='comments'>
                {this.props.postComments.map(this.renderComment)}
            </div>
        );
    }
}

export default Comments;