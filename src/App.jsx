import { useState } from 'react'
import linkedinLogo from './assets/linkedin.svg'
import selfie from './assets/selfie.jpeg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hi from './components/Hi'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  

  return (
    <>
    <Header className="jsx"></Header>
    <Hi></Hi>
    <About></About>
    <Projects></Projects>
    <Footer></Footer>
    </>
  )
}
export default App
