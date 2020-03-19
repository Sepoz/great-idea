import React from "react";
import ComMap from "./ComMap";

const CommentsRender = ({ post }) => {
    return post.comments.map(com => <ComMap key={com.id} com={com} post={post} />)
};

export default CommentsRender;