import React from "react"

import Header from "../components/Header"
import Cards from "../components/Cards"
import NewsHeader from "../components/NewsHeader"
import BlogPost from "../components/BlogPost"
import PostGrid from "../components/PostGrid"

class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Cards />
        <NewsHeader />
        <PostGrid />
      </div>
    )
  }
}

export default Index
