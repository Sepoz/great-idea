import React from "react";

const ComMap = ({ com }) => {

    const handleUpvoteButton = () => {

    };

    const handleDownvoteButton = () => {

    };

    return (
        <div>
            <li>{com.commentKarma} {com.commentContent}</li>

            <button onClick={handleUpvoteButton}>upvote</button>
            <button onClick={handleDownvoteButton}>downvote</button>
        </div>
    )
};

export default ComMap;