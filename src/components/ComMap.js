import React, { useState, useEffect } from "react";
import axios from "axios";

const ComMap = ({ com, post }) => {
    const [karma, setKarma] = useState(com.commentKarma);
    const [voted, setVoted] = useState(false);

    const handleUpvoteButton = () => {
        if (voted === false) {
            setKarma(karma + 1);
            setVoted(true);
        } else {
            window.alert("You already voted!");
        };
    };

    const handleDownvoteButton = () => {
        if (voted === false) {
            setKarma(karma - 1);
            setVoted(true);
        } else {
            window.alert("You alredy voted!");
        };
    };

    useEffect(() => {
        axios
            .patch(`/posts/${post.id}/comment/${com.id}`, {
                commentKarma: karma
            })  
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [com.id, karma, post.id]);

    return (
        <div className="comment">
            <li>{karma} {com.commentContent}</li>

            <button onClick={handleUpvoteButton}>upvote</button>
            <button onClick={handleDownvoteButton}>downvote</button>
        </div>
    )
};

export default ComMap;