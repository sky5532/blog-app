function Post({ post, onLike, onDelete, currentUser }) {
  const isMine = post.author === currentUser;

  return (
    <div className="post">
      <h3>{post.author}</h3>
      <p>{post.text}</p>
      <div className="post-actions">
        <button
          className={post.liked ? "liked" : ""}
          onClick={() => onLike(post.id)}
        >
          {post.liked ? "♥" : "♡"} {post.likes}
        </button>
        {isMine && <button onClick={() => onDelete(post.id)}>Delete</button>}
      </div>
    </div>
  );
}

export default Post;