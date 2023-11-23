
import Header from "../components/Header"
import Home from "../screens/Home"
import About from "./About"
import Carousel from "./Carousel"

import Skills from "./Skills"
import Knowledge from "./Knowledge"
import Contact from "./Contact"
import Footer from "../components/Footer"



function App() {

  return (
    <main>
      <header className=" fixed top-0 left-0 w-full">
      
      <Header />
      
      </header>
      
      <section className="w-screen h-screen overflow-hidden overflow-y-auto  ">
      <Home />
      <About />
      <Skills />
      <Knowledge />
      <Carousel />
      <Contact />
      <Footer />

        {/* 
        
        
        <Galeria />
        <Ejemplo />
        
      
      */}
      </section>

    </main>
  )
}

export default App
