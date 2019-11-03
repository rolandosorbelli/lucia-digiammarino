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
    )}
  ></StaticQuery>
)

export default AboutContent
