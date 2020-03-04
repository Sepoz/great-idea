import React, { useState } from 'react';
import Post from "./components/Post";
import PostRender from './components/PostRender';

const App = () => {
	const [posts, setPosts] = useState([
    {
		title: "Title 1",
		content: "Hi my name is Simone!",
		karma: 1,
		date: "Mon, 02 Mar 2020 16:15:30 GMT"
    },
    {
		title: "Title 2",
		content: "Hi my name is Carla!",
		karma: 34,
		date: "Mon, 02 Mar 2020 16:15:30 GMT"
    },
    {
		title: "Title 3",
		content: "Hi my name is Mirco!",
		karma: 948,
		date: "Mon, 02 Mar 2020 16:15:30 GMT"
    }
  ]);
  const [newPost, setNewPost] = useState("");
  const [newTitle, setNewTitle] = useState("");

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
