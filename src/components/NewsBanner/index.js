import React from "react"
import Stickyfill from "stickyfilljs"

import arrow from "../../images/down-arrow.svg"

import jump from "jump.js"

class NewsBanner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    if (typeof window === undefined) {
      const Stickyfill = require("stickyfilljs")
    }
  }

  render() {
    const banner = document.querySelectorAll(".newsbanner")
    Stickyfill.add(banner)

    return (
      <button className="newsbanner__link" onClick={() => jump(".newsHeader")}>
        <div className="newsbanner">
          <h2>Blog Posts</h2>
          <img className="newsbanner__arrow" src={arrow} alt="" />
        </div>
      </button>
    )
  }
}

export default NewsBanner
