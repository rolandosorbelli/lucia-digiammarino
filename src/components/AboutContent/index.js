import React from "react"
import { StaticQuery, graphql } from "gatsby"

const AboutContent = () => (
  <StaticQuery
    query={graphql`
      {
        contentfulAboutPage {
          id
          title
          slug
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `}
    render={data => (
      <main>
        <div className="aboutContent">
          <h1 className="aboutHeading">About me</h1>
          <div
            className="aboutBody"
            dangerouslySetInnerHTML={{
              __html: `${data.contentfulAboutPage.content.childMarkdownRemark.html}`,
            }}
          ></div>
          <h1 className="aboutHeading">Contact</h1>
          <div className="aboutContent__content">
            <h2>Email</h2>
            <a href="mailto:luciadigiammarino@gmail.com">
              luciadigiammarino@gmail.com
            </a>
            <h2>Instagram</h2>
            <a href="https://www.instagram.com/art.of.medusa/">art.of.medusa</a>
            <h2>Facebook</h2>
            <a href="https://www.facebook.com/artofmedusa1">Art of Medusa</a>
          </div>
        </div>
      </main>
    )}
  ></StaticQuery>
)

export default AboutContent
