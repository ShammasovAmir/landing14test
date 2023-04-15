import { useState } from "react"
import "./scss/style.scss"
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import About from "./components/About/About"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
