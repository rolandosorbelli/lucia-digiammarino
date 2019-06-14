import React from "react"

class AboutContent extends React.Component {
  render(){

    return(
      <main>
        <div className="aboutContent">
          <h1 className="aboutHeading">About me</h1>
          <p className="aboutBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <h1 className="aboutHeading">Contacts</h1>
          <div className="aboutContent__content">
            <h2>Email</h2>
            <a href="mailto:blahblah@gmail.com">blahblah@gmail.com</a>
            <h2>Phone</h2>
            <a href="tel:+0123456789">+0 123 456 789</a>
            <h2>Skype</h2>
            <a href="skype:blah_blah">blah_blah</a>
            <h2>Address</h2>
            <p>123a Blah Road, N4 3EX, London</p>
          </div>
        </div>

      </main>
    );
  }
}

export default AboutContent
