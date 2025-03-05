// src/components/ArticleList.tsx
import React from 'react';

interface Post {
  id: number;
  title: string;
  date: string;
  preview: string;
}

interface ArticleListProps {
  posts: Post[];
}

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <small>{post.date}</small>
          <p>{post.preview}</p>
        </article>
      ))}
    </main>
  );
};

export default ArticleList;
