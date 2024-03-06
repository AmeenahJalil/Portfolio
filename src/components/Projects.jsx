import React from 'react'
import bookmarkd from "../assets/bookmarkd.jpeg"

function Projects(){
    return(
        <>
        <h2 id="projects">Projects</h2>
        <h3>Bookmarkd - include screenshot and link</h3>
        <a href="https://bookmarkd-ruddy.vercel.app/" target="_blank">
          <img src={bookmarkd} className="bookmarkd image" alt="bookmarkd screenshot" />
        </a>
        </>

    )
}
export default Projects