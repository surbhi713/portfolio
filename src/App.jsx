import React from 'react'
import { DarkModeProvider } from './components/DarkModeComponent'
import Header from './components/Header'
import Home from './section/Home'
import 'aos/dist/aos.css';
import About from './section/About';
import Skills from './section/Skills';


function App() {
  return (
    <div>
      <DarkModeProvider>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
      </DarkModeProvider>
    </div>
  )
}

export default App