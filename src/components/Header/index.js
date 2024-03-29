import React from "react"

import logo from "../../images/logoMedusa.svg"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <header>
        <div className="header__items">
          <a className="header__items--left" href="/">
            <img
              className="header__items--logo"
              src={logo}
              alt="Lucia Di Giammarino Logo"
            />
          </a>
          <div className="header__items--right">
            <div className="header__items--right__text">
              <h1>Lucia</h1>
              <h1>Di Giammarino</h1>
              <h2>Cartoonist</h2>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="white" points="0,40 100,100 0,100" />
        </svg>
      </header>
    )
  }
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
