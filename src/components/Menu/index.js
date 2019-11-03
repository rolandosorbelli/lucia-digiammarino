import React, { Component } from "react"
import classNames from "classnames"

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }
  }

  handleClick = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }

  render() {
    return (
      <nav>
        <button
          className={classNames("hamburger", "hamburger--spin", {
            "is-active": this.state.visible,
          })}
          type="button"
          onClick={this.handleClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div
          className={classNames("hamburger-nav", {
            opened: this.state.visible,
          })}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About me</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/luciadigia/">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.behance.net/luciadigiammarino">Bēhance</a>
            </li>
            <li>
              <a href="https://dribbble.com/digia">Dribbble</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Menu
