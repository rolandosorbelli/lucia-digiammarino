import React from "react"

import Header from "../components/Header"
import Cards from "../components/Cards"
import NewsBanner from "../components/NewsBanner"
import NewsHeader from "../components/NewsHeader"
import BlogPost from "../components/BlogPost"

class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Cards />
        <NewsBanner />
        <NewsHeader />
        <BlogPost />
      </div>
    )
  }
}

export default Index
