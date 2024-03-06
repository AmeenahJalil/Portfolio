import React from "react"
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hi from './components/Hi'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  

  return (
    <>
    <Header></Header>
    <Hi></Hi>
    <About></About>
    <Projects></Projects>
    <Footer></Footer>
    </>
  )
}
export default App
