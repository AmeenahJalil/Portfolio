import React from 'react'
import bookmarkd from "../assets/bookmarkd.png"
import "../App.css"

function Projects(){
    return(
        <>
        <h2 id="projects">Projects</h2>
        <h3>Bookmarkd</h3>
        <div className = "flex-container">
        
        
        
        <a className="bookmarkd screenshot" href="https://bookmarkd-ruddy.vercel.app/" target="_blank">
          <img src={bookmarkd} className="bookmarkdImage" alt="bookmarkd screenshot" />
        </a>
        
        <h4>Bookmarkd is an app where you can easily input your reading progress, find reccomendations using AI and create your own customised bookshelves. It is every book lovers dream app. </h4>
        </div>
        <h3>Try the app <a href="https://bookmarkd-ruddy.vercel.app/" target="_blank">here</a></h3>
        
        </>
        

    )
}
export default Projects