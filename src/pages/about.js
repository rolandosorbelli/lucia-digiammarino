import React from "react"

import SEO from "../components/seo"
import Header from "../components/Header"
import AboutContent from "../components/AboutContent"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

const About = props => {
  return (
    <>
      <SEO title="About me" description="Di Già" />
      <Header />
      <Menu />
      <AboutContent />
      <Footer />
    </>
  )
}

export default About
