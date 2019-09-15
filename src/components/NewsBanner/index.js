import React from "react"

import arrow from "../../images/down-arrow.svg"

import jump from "jump.js"

class NewsBanner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
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
