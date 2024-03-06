import React from "react";
import linkedinLogo from "../assets/linkedin.svg"
import githubLogo from "../assets/github.svg"
import "../App.css"



function Footer() {
    return (
        <>

<footer>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a id="contact" href="https://www.linkedin.com/in/ameenah-jalil/" target="_blank">
          <img src={linkedinLogo} className="logo react" alt="Linkedin logo" />
        </a>
        <a href="https://github.com/AmeenahJalil" target="_blank">
          <img src={githubLogo} className="logo github" alt="Github logo" />
        </a>
        <h4>© 2024 Ameenah Jalil. All Rights Reserved</h4>

      </footer>
      
      </>
     
    );
  }
  export default Footer;










