import React, { useState } from "react";

type ArticleProps = {
  title: string;
  date?: string;
  preview: string;
  minutes: number;
  content: string; // Include content as a prop
};

const Article: React.FC<ArticleProps> = ({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
  content,
}) => {
  const [isExpanded, setIsExpanded] = useState(false); // State for toggling content

  // Function to generate the 'Minutes to Read' emoji display
  const generateReadTime = (minutes: number) => {
    if (minutes < 30) {
      return "☕️".repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`;
    } else {
      return "🍱".repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;
    }
  };

  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev); // Toggle the state to show full content
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{generateReadTime(minutes)}</p>

      {/* Conditionally render content based on state */}
      {isExpanded ? <p>{content}</p> : null}

      <button onClick={handleToggleContent}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </article>
  );
};

export default Article;
