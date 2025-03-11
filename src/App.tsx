// src/App.tsx
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import blogData from "./data/blog";

const App: React.FC = () => {
  return (
    <div>
      <Header name={blogData.name} />
      <About about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
};

export default App;
