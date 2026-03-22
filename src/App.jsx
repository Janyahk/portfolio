import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/about/about'
import Skills from './components/skill/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/footer/Footer'
import Contact from './components/getintouch/Contact'
import  { useState,useEffect } from 'react';

const App = () => {
    const [section, setSection] = useState("home");
     useEffect(() => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);
  return (
    <div className='w-full bg-slate-900 m-0 text-white   '>
    {/* // <div className='bg-slate-900 text-white flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-16 p-4 md:p-8'> */}
      <Navbar onSectionChange={setSection}></Navbar>
       <div id="home" >
    <Hero onSectionChange={setSection} />
  </div>

  <div id="about">
    <About />
  </div>

  <div id="skills">
    <Skills />
  </div>

  <div id="projects">
    <Projects />
  </div>

  <div id="contact">
    <Contact />
  </div>
      <Footer></Footer>
    </div>
  )
}

export default App
