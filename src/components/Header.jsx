import React from "react";
import '../App.css'

function Header() {
   

  return (
    <header>
        <nav className = "flex-container">
        
      
        <a href="#">Home</a>

        <a href="#about">About</a>

        <a href="projects">Projects</a>

        <a href="contact">Contact</a>

        <a href="#">CV</a>
        </nav>
      
    </header>
  );
}
export default Header;
