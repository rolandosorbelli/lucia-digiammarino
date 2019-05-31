import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import Header from "../components/Header"
import Cards from "../components/Cards"

class Index extends React.Component {

  render() {
    const {
      header
    } = this.props

    return (
      <div className="main">
        <Header/>
        <Cards/>
      </div>
    )
  }
}

export default Index
