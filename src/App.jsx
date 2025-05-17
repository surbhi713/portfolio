import React from 'react'
import { DarkModeProvider } from './components/DarkModeComponent'
import Header from './components/Header'
import Home from './section/Home'
import 'aos/dist/aos.css';
import About from './section/About';
import Skills from './section/Skills';
import Projects from './section/Projects';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SkillsSection from './section/Skills';
import Project from './section/Projects';
import Contact from './section/Contact';
import project from './components/export';


function App() {
  return (
    <div>
      <BrowserRouter>
      <DarkModeProvider>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      <Routes>
        {/* <Route path='/header' element={<Header/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/pro' Component={Projects}/> */}

          </Routes>
      </DarkModeProvider> 
          </BrowserRouter>
      
    </div>
  )
}

export default App