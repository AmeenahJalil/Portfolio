import React from 'react'
import bookmarkd from "../assets/bookmarkd.png"
import "../App.css"

function Projects(){
    return(
        <>
        <h2 id="projects">Projects</h2>
        <h3>Bookmarkd</h3>
        <a className="bookmarkd screenshot" href="https://bookmarkd-ruddy.vercel.app/" target="_blank">
          <img src={bookmarkd} className="bookmarkdImage" alt="bookmarkd screenshot" />
        </a>
        <h3>Try the app <a href="https://bookmarkd-ruddy.vercel.app/" target="_blank">here</a></h3>
        </>

    )
}
export default Projects