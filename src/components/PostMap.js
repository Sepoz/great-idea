import React, { useState, useEffect } from "react";
import axios from "axios";

const PostMap = ({ post }) => {
    const [karma, setKarma] = useState(post.karmaTotal);
    const [voted, setVoted] = useState(false);

    // handle comment button
    const handleCommentButton = () => {
        console.log("comments!");
    };

    // handle upvote button
    const handleUpvoteButton = () => {
        if (voted === false) {
            setKarma(karma + 1);
            setVoted(true);
        } else {
            window.alert("You already voted!");
        };
    };

    // handle downvote button
    const handleDownvoteButton = () => {
        if (voted === false) {
            setKarma(karma - 1);
            setVoted(true);
        } else {
            window.alert("You alredy voted!");
        };
    };

    // patch request
    useEffect(() => {
        axios
        .patch(`/posts/${post.id}`, {
            karmaTotal: karma
        })  
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }, [karma, post.id]);



    return (
        <div className="post">
            <h3>{post.title}</h3>
            <li>{karma} {post.content}</li>
            
            <button onClick={handleUpvoteButton}>upvote</button>
            <button onClick={handleDownvoteButton}>downvote</button>
            <button onClick={handleCommentButton}>comments</button>
        </div>
    )
};

export default PostMap;