import React from "react";

type ArticleProps = {
  title: string;
  date?: string;
  preview: string;
  minutes: number;
};

const Article: React.FC<ArticleProps> = ({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
}) => {
  // Function to generate the 'Minutes to Read' emoji display
  const generateReadTime = (minutes: number) => {
    if (minutes < 30) {
      return "☕️".repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`;
    } else {
      return "🍱".repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{generateReadTime(minutes)}</p>
    </article>
  );
};

export default Article;
