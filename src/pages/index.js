import React from "react"

import Header from "../components/Header"
import Cards from "../components/Cards"
import NewsBanner from "../components/NewsBanner"

class Index extends React.Component {

  render() {

    return (
      <div className="main">
        <Header />
        <Cards />
        <NewsBanner />
      </div>
    )
  }
}

export default Index
