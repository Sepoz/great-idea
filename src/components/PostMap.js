import React, { useState } from "react";

const PostMap = ({ post }) => {
    const [karma, setKarma] = useState(0);

    // handel comment button
    const handleCommentButton = () => {
        console.log("comments!");
    };

    // handle upvote button
    const handleUpvoteButton = () => {
        setKarma(karma + 1);
    };

    // handle downvote button
    const handleDownvoteButton = () => {
        setKarma(karma - 1);
    };

    return (
        <div className="post">
            <h3>{post.title}</h3>
            <li>{post.karma} {post.content}</li>
            
            <button onClick={handleUpvoteButton}>upvote</button>
            <button onClick={handleDownvoteButton}>downvote</button>
            <button onClick={handleCommentButton}>comments</button>
        </div>
    )
};

export default PostMap;