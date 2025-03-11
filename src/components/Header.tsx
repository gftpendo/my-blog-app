import React from "react";

const Header: React.FC<{ name: string }> = ({ name }) => {
  return (
    <header style={headerStyle}>
      <img
        src="/blog-logo.png"  // The logo is placed inside the public folder
        alt="Blog Logo"
        style={logoStyle}  // Inline styling for logo size
      />
      <h1 style={titleStyle}>Welcome to {name}</h1>
    </header>
  );
};

// Styling for header container
const headerStyle: React.CSSProperties = {
  backgroundColor: "#031223", 
  padding: "1rem",            
  textAlign: "center",        
  borderRadius: "8px 8px 0 0", 
  color: "#ffffff",            
};

// Styling for logo
const logoStyle: React.CSSProperties = {
  width: "100px",   
  height: "auto",   
  marginBottom: "10px", 
};

// Styling for title
const titleStyle: React.CSSProperties = {
  fontSize: "2rem", 
  fontWeight: "bold", 
  margin: 0, 
};

export default Header;  // Default export


