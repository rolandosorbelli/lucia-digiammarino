import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header"
import Cards from "../components/Cards"
import NewsHeader from "../components/NewsHeader"
import PostGrid from "../components/PostGrid"
import Footer from "../components/Footer"

class Index extends React.Component {
  render() {
    return (
      <>
        <SEO title="Medusa" />
        <Header />
        <Cards />
        <NewsHeader />
        <PostGrid />
        <Footer />
      </>
    )
  }
}

export default Index
