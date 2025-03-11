import React from "react";
import Article from "./Article"; // Import the new Article component

interface ArticleListProps {
  posts: { id: number; title: string; date?: string; preview: string; minutes: number }[];
}

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
          minutes={post.minutes} 
        />
      ))}
    </div>
  );
};

export default ArticleList;

