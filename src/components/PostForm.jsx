import { useState } from "react";

function PostForm({ onAddPost }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    onAddPost(text);
    setText("");
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" disabled={text.trim() === ""}>
        Post
      </button>
    </form>
  );
}

export default PostForm;