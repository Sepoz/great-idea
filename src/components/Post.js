import React from "react";
import axios from "axios";

const Post = ({ newPost, setNewPost, posts, setPosts, newTitle, setNewTitle }) => {
    
    // create the post object
    const addPost = (event) => {
		event.preventDefault();
		
        const postObject = {
			title: newTitle,
			content: newPost,
      karmaTotal: 1,
      comments: [],
			date: new Date().toUTCString()
		}
		
		axios
			.post("/posts", postObject)
			.then(res => {
				setPosts(posts.concat(res.data));
				setNewPost("");
				setNewTitle("");
			})
			.catch(err => console.log(err))
    };

    // handle the tiping in the content input
    const handleContentChange = (event) => {
        setNewPost(event.target.value);
    };

    // handle the tiping in the title input
    const handleTitleChange = (event) => {
		setNewTitle(event.target.value);
    };

    return (
      <div className="post-form">
        <form onSubmit={addPost}>
          <input type="text" value={newTitle} required onChange={handleTitleChange} />
          <textarea type="text" value={newPost} required onChange={handleContentChange} />
          <button type="submit">post</button>
        </form>
      </div>
    );
}

export default Post;