import React from "react";

const PostMap = ({ post }) => {

    // handel comment button
    const handleCommentButton = () => {
        console.log("comments!");
    };

    // handle upvote button
    const handleUpvoteButton = () => {
        console.log("+ 1");
    };

    // handle downvote button
    const handleDownvoteButton = () => {
        console.log("- 1");
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