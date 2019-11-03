import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          &copy; Copyright {new Date().getFullYear()}, Lucia Digiammarino. All
          Rights Reserved.
        </p>
      </footer>
    )
  }
}

export default Footer
