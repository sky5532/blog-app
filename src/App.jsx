import { useState } from "react";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

const CURRENT_USER = "You";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, author: "Ama", text: "Learning React is fun!", likes: 3, liked: false },
    { id: 2, author: "Kofi", text: "Just deployed my first app.", likes: 1, liked: false },
    { id: 3, author: CURRENT_USER, text: "Building my blog app.", likes: 0, liked: false },
  ]);

  function addPost(text) {
    const newPost = {
      id: Date.now(),
      author: CURRENT_USER,
      text: text,
      likes: 0,
      liked: false,
    };
    setPosts([newPost, ...posts]);
  }

  function likePost(id) {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  }

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div className="app">
      <h1>Blog App</h1>
      <PostForm onAddPost={addPost} />
      {posts.length === 0 && <p>No posts yet. Be the first to post!</p>}
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={likePost}
          onDelete={deletePost}
          currentUser={CURRENT_USER}
        />
      ))}
    </div>
  );
}

export default App;