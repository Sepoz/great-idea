import React from "react";
import PostMap from "./PostMap";

// map every post 
const PostRender = ({ posts }) => {
    return posts.map(post => <PostMap key={post.content} post={post} />)
};

export default PostRender;