import React from "react";

const Post = ({ newPost, setNewPost, posts, setPosts, newTitle, setNewTitle, newKarma }) => {
    
    // create the post object
    const addPost = (event) => {
        event.preventDefault()
        const postObject = {
			title: newTitle,
			content: newPost,
			karma: newKarma,
			date: new Date().toUTCString()
        }
		// concat the post object to posts and reset the inputs
        setPosts(posts.concat(postObject));
		setNewPost("");
		setNewTitle("");
        console.log(posts);
        
    };

    // handle the tiping in the content input
    const handleContentChange = (event) => {
        setNewPost(event.target.value);
    };

    // handle the tiping in the comment input
    const handleTitleChange = (event) => {
		setNewTitle(event.target.value);
    };

    return (
      <div>
        <form onSubmit={addPost}>
          <input type="text" value={newTitle} required onChange={handleTitleChange} />
          <textarea type="text" value={newPost} required onChange={handleContentChange} />
          <button type="submit">post</button>
        </form>
      </div>
    );
}

export default Post;