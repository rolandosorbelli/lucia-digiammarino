import React from "react"

import aboutMe from "../../images/AboutMe.svg"
import behance from "../../images/Behance.svg"
import redbubble from "../../images/redbubble.svg"
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
              <img
                className="cards__image"
                src={aboutMe}
                alt=""
                style={{ marginBottom: "10px" }}
              />
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

            <a
              href="https://www.redbubble.com/people/digiaart/shop"
              className="cards__item"
            >
              <div className="cards__content">
                <h1>RedBubble</h1>
                <h2>My shop</h2>
              </div>
              <img className="cards__image" src={redbubble} alt="" />
            </a>
          </div>
        </div>
      </main>
    )
  }
}

export default Cards
