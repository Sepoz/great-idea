import React, { useState, useEffect } from 'react';
import axios from "axios";
import Post from "./components/Post";
import PostRender from './components/PostRender';

const App = () => {
	const [posts, setPosts] = useState([]);
  	const [newPost, setNewPost] = useState("");
  	const [newTitle, setNewTitle] = useState("");

  	useEffect(() => {
		axios
			.get("/posts")
			.then(res => {
				setPosts(res.data);
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<div>

		<h1>Reddit 2</h1>
		
		<ul>
			<PostRender posts={posts} />
		</ul>

		<Post newPost={newPost} setNewPost={setNewPost} posts={posts} setPosts={setPosts} newTitle={newTitle} setNewTitle={setNewTitle} /> 

		</div>
  );
}

export default App;
