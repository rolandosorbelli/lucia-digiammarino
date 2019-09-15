import React from "react"

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
              <div className="cards__item--right cards__item--right--section1">
                <h1>About me</h1>
                <h2>Contacts</h2>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/luciadigia/"
              className="cards__item"
            >
              <div className="cards__item--right cards__item--right--section2">
                <h1>LinkedIn</h1>
                <h2>CV</h2>
              </div>
            </a>

            <a
              href="https://www.behance.net/luciadigiammarino"
              className="cards__item"
            >
              <div className="cards__item--right cards__item--right--section3">
                <h1>Behance</h1>
                <h2>Portfolio</h2>
              </div>
            </a>

            <a
              href="https://www.artstation.com/luciadigiammarino"
              className="cards__item"
            >
              <div className="cards__item--right cards__item--right--section4">
                <h1>ArtStation</h1>
                <h2>Portfolio</h2>
              </div>
            </a>
          </div>
        </div>
      </main>
    )
  }
}

export default Cards
