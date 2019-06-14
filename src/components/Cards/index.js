import React from "react"
import { BrowserRouter } from 'react-router-dom'

import about from "../../images/about.svg"
import cv from "../../images/cv.svg"
import portfolio1 from "../../images/portfolio1.svg"
import portfolio2 from "../../images/portfolio2.svg"

class Cards extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){

    return (
      <main>
        <div className="cards__wrapper">
          <BrowserRouter>
            <a
              href="/about"
              className="cards__item">
              <img
                className="cards__item--left"
                src={about}
                alt=""
              />
              <div className="cards__item--right">
                <h1>About me</h1>
                <h2>Contacts</h2>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/luciadigia/"
              className="cards__item">
              <img
                className="cards__item--left"
                src={cv}
                alt=""
              />
              <div className="cards__item--right">
                <h1>LinkedIn</h1>
                <h2>CV</h2>
              </div>
            </a>

            <a
              href="https://www.behance.net/luciadigiammarino"
              className="cards__item">
              <img
                className="cards__item--left"
                src={portfolio1}
                alt=""
              />
              <div className="cards__item--right">
                <h1>Behance</h1>
                <h2>Portfolio</h2>
              </div>
            </a>

            <a
              href="https://www.artstation.com/luciadigiammarino"
              className="cards__item">
              <img
                className="cards__item--left"
                src={portfolio2}
                alt=""
              />
              <div className="cards__item--right">
                <h1>ArtStation</h1>
                <h2>Portfolio</h2>
              </div>
            </a>
          </BrowserRouter>
        </div>
      </main>
    )

  }
}

export default Cards
