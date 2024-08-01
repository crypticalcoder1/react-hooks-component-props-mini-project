// src/components/ArticleList.js
import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  if (!posts || !Array.isArray(posts)) {
    // Handling case where posts is not provided or not an array
    return <main>No posts available</main>;
  }

  return (
    <main>
      {posts.map(post => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
