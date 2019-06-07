import React from "react"

import image1 from "../../images/post_1.png"

class BlogPost extends React.Component {
  render(){

    return(
      <div className="blogpost">
        <h2 className="blogpost__title">Lorem Ipsum</h2>
        <p className="blogpost__date">30 April 2019</p>
        <img src={image1} alt=""/>
      </div>
    );
  }
}

export default BlogPost
