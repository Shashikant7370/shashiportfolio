import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Certificates from "./components/Certificates";
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    AOS.init(
      {
        duration:1000,
        easing:"ease-in-out",
        once:false
      }
    )
  },[])
  return (
    <div className="App">
      <Navbar show={show} setShow={setShow} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
