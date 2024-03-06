import React from 'react'
import bookmarkd from "../assets/bookmarkd.png"

function Projects(){
    return(
        <>
        <h2 id="projects">Projects</h2>
        <h3>Bookmarkd</h3>
        <a href="https://bookmarkd-ruddy.vercel.app/" target="_blank">
          <img src={bookmarkd} className="bookmarkd image" alt="bookmarkd screenshot" />
        </a>
        <h3>Try the app <a href="https://bookmarkd-ruddy.vercel.app/" target="_blank">here</a></h3>
        </>

    )
}
export default Projects