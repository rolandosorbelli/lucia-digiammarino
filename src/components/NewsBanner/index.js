import React from "react"

import arrow from '../../images/down-arrow.svg'

class NewsBanner extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){

    return(
      <div className="newsbanner">
        <h2>Blog Posts</h2>
        <img
          className="newsbanner__arrow"
          src={arrow}
          alt=""
        />
      </div>
    );
  }
}

export default NewsBanner
