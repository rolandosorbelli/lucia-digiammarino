import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import logo from "../../../images/logo.svg"

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){

    return (
      <header>
        <div className="header__items">
          <a
            className="header__items--left"
            href="/">
            <img
              className="header__items--logo"
              src={logo}
              alt='Lucia Di Giammarino Logo'
            />
          </a>
          <div className="header__items--right">
            <div className="header__items--right__text">
              <h1>Lucia Di Giammarino</h1>
              <h2>2D artist</h2>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100"/>
        </svg>
      </header>
    )
  }
}

Header.propTypes = {
}

Header.defaultProps = {

}

export default Header
