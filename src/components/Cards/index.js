import React from "react"

import aboutMe from "../../images/AboutMe.svg"
import behance from "../../images/Behance.svg"
import dribbble from "../../images/Dribbble.svg"
import linkedin from "../../images/LinkedIn.svg"

class Cards extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <main>
        <div className="cards__outside">
          <div className="cards__wrapper">
            <a href="/about" className="cards__item">
              <div className="cards__content">
                <h1>About me</h1>
                <h2>Contact</h2>
              </div>
              <img className="cards__image" src={aboutMe} alt="" />
            </a>

            <a
              href="https://www.linkedin.com/in/luciadigia/"
              className="cards__item"
            >
              <div className="cards__content">
                <h1>LinkedIn</h1>
                <h2>CV</h2>
              </div>
              <img className="cards__image" src={linkedin} alt="" />
            </a>

            <a
              href="https://www.behance.net/luciadigiammarino"
              className="cards__item"
            >
              <div className="cards__content">
                <h1>Bēhance</h1>
                <h2>Portfolio</h2>
              </div>
              <img className="cards__image" src={behance} alt="" />
            </a>

            <a href="https://dribbble.com/digia" className="cards__item">
              <div className="cards__content">
                <h1>Dribbble</h1>
                <h2>Portfolio</h2>
              </div>
              <img className="cards__image" src={dribbble} alt="" />
            </a>
          </div>
        </div>
      </main>
    )
  }
}

export default Cards
