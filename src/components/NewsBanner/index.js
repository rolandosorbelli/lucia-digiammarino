import React from "react"
import Stickyfill from 'stickyfilljs'

import arrow from '../../images/down-arrow.svg'

class NewsBanner extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){

    const banner = document.querySelectorAll('.newsbanner')
    Stickyfill.add(banner)

    return(
      <a
        className="newsbanner__link"
        href="#">
          <div className="newsbanner">
            <h2>Blog Posts</h2>
            <img
              className="newsbanner__arrow"
              src={arrow}
              alt=""
            />
          </div>
      </a>
    );
  }
}

export default NewsBanner
