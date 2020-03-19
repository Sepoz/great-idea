import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentsRender from "./CommentsRender";

const PostMap = ({ post }) => {
    const [karma, setKarma] = useState(post.karmaTotal);
    const [voted, setVoted] = useState(false);
    const [comment, setComment] = useState(post.comments);
    const [newComment, setNewComment] = useState("");

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

    // get the comment input
    const handleComment = (event) => {
        setNewComment(event.target.value);
    };

    // add comment object to comment[] and backend
    const addComment = (event) => {
        event.preventDefault();

        const commentObject = {
            commentContent: newComment,
            commentKarma: 1,
            commentDate: new Date().toUTCString()
        }
        
        axios
            .post(`/posts/comment/${post.id}`, commentObject)
            .then(res => {
                setComment(comment.concat(res.data));
                window.alert("comment added!");
                setNewComment("");
            })
            .catch(err => console.log(err))
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
            <ul>
                <li>{karma} {post.content}</li>
            </ul>
            
            <button onClick={handleUpvoteButton}>upvote</button>
            <button onClick={handleDownvoteButton}>downvote</button>

            <h3>Comments:</h3>
            <ul>
                <CommentsRender post={post} />
            </ul>
            <form onSubmit={addComment}>
                <textarea type="text" value={newComment} required onChange={handleComment} />
                <button type="submit">comment</button>
            </form>
        </div>
    )
};

export default PostMap;