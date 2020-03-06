import React, { useState } from "react";
import axios from "axios";

const PostMap = ({ post }) => {
    const [karma, setKarma] = useState(post.karmaTotal);

    // handle comment button
    const handleCommentButton = () => {
        console.log("comments!");
    };

    // handle upvote button
    // patch request
    const handleUpvoteButton = () => {
        setKarma(karma + 1);
        
        axios
        .patch(`http://localhost:3001/posts/${post.id}`, {
            karmaTotal: karma
        })  
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    };

    // handle downvote button
    // patch request
    const handleDownvoteButton = () => {
        setKarma(karma - 1);

        axios
            .patch(`http://localhost:3001/posts/${post.id}`, {
                karmaTotal: karma
            })  
            .then(res => {console.log(res.data)})
            .catch(err => console.log(err))
    };

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