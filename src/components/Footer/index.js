import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          &copy; Copyright {new Date().getFullYear()}, Lucia Digiammarino. All
          Rights Reserved.
        </p>
      </div>
    )
  }
}

export default Footer
