import React from 'react';
import Photo from './Photo';

const Single = React.createClass({
    render() {
        const i = this.props.posts.findIndex((post => post.code = this.props.params.posId));
        const post = this.props.posts[i]; 
        return (
            <div className='single-photo'>
             <Photo key = {i}  i={i} post={post} {...this.props}/>
            </div>
        );
    }
});

export default Single;