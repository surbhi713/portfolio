import React from 'react'
import { DarkModeProvider } from './components/DarkModeComponent'
import Header from './components/Header'
import Home from './section/Home'
import 'aos/dist/aos.css';
import About from './section/About';
import Skills from './section/Skills';
import Projects from './section/Projects';
import { BrowserRouter,Routes,Route } from "react-router-dom";;
import Contact from './section/Contact';
import Footer from './components/Footer';



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
        <Footer/>
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