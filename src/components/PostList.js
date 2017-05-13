import React from 'react';

const PostList = (props) => {
    return (
        <div>{ props.match.params.postId } 번째 포스트</div>
    );
}

export default PostList;