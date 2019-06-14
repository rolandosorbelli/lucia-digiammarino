import React from "react"

import image1 from "../../images/post_1.png"
import image2 from "../../images/post_2.png"


class BlogPost extends React.Component {
  render(){

    return(
      <div className="blogContainer">
        <div className="blogpost">
          <h2 className="blogpost__title">Lorem Ipsum</h2>
          <p className="blogpost__date">30 April 2019</p>
          <img src={image1} alt=""/>
          <p className="blogpost__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href="">Duis</a> aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non <a href="">proident</a>, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="blogpost">
          <h2 className="blogpost__title">Dolor Sit Amet</h2>
          <p className="blogpost__date">29 April 2019</p>
          <img src={image2} alt=""/>
          <p className="blogpost__content">
            Vitae nunc sed velit dignissim. Porttitor rhoncus dolor purus non enim. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Risus viverra adipiscing at in tellus integer. Massa vitae tortor condimentum lacinia quis. Odio eu feugiat pretium nibh ipsum consequat nisl. Pellentesque dignissim enim sit amet venenatis urna cursus. Purus in mollis nunc sed id semper risus in hendrerit. Iaculis nunc sed augue lacus viverra. Varius vel pharetra vel turpis. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Amet justo donec enim diam vulputate ut pharetra. Aliquam etiam erat velit scelerisque in. Vulputate ut pharetra sit amet aliquam id diam. Et sollicitudin ac orci phasellus.
            Viverra justo nec ultrices dui sapien eget mi proin sed. Quis blandit turpis cursus in hac habitasse. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Phasellus vestibulum lorem sed risus ultricies. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Rhoncus urna neque viverra justo nec ultrices dui. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Cum sociis natoque penatibus et magnis dis parturient. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. In fermentum posuere urna nec tincidunt praesent semper. Sagittis orci a scelerisque purus semper eget. Faucibus in ornare quam viverra orci. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Suspendisse in est ante in nibh mauris cursus. Tortor posuere ac ut consequat semper viverra nam libero justo. Aliquam ultrices sagittis orci a. Tellus rutrum tellus pellentesque eu tincidunt tortor. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
          </p>
        </div>
      </div>
    );
  }
}

export default BlogPost
