// src/components/App.js
import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"; // Ensure this path is correct
import blogData from "../data/blog"; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList articles={blogData.posts} /> {/* Ensure posts is the correct data */}
    </div>
  );
}

export default App;
