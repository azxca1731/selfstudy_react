import React from 'react';
const PostPrev = ({ postTitle, postSubtitle, writer }) => {
    return (
        <div>
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">
                        {postTitle}
                    </h2>
                    <h3 className="post-subtitle">
                        {postSubtitle}
                    </h3>
                </a>
                <p className="post-meta">Posted by
                    <a href="/"> {writer} </a>
                    on September 24, 2018</p>
            </div>
            <hr />
        </div>
    )
}
export default PostPrev;
