// src/components/About.tsx
import React from "react";

interface AboutProps {
  about: string;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <aside className="about-section">
      <p>{about}</p>
    </aside>
  );
};

export default About;

