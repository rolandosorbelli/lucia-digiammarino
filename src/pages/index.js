import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import Header from "../components/organisms/Header"

class Index extends React.Component {

  render() {
    const {
      header
    } = this.props

    return (
      <div className="main">
        <Header/>
        <div className="blah"></div>
      </div>
    )
  }
}

export default Index
