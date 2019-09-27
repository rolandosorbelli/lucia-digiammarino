import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import logo from "../images/logo.svg"
import Menu from "../components/Menu"

export const query = graphql`
  query blogPost($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      id
      slug
      createdAt(locale: "en-GB", formatString: "D/MM/Y")
      quote
      category {
        id
        title
      }
      content {
        id
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid(maxWidth: 1200, quality: 100) {
          src
        }
      }
    }
  }
`

const blogPost = props => {
  console.log(props)
  return (
    <Layout>
      <Menu />
      <div className="blogContainer">
        <a href="/">
          <img className="logo" src={logo} alt="Lucia Di Giammarino Logo" />
        </a>
        <div
          className="blogpost__hero"
          style={{
            backgroundImage: `url(${props.data.contentfulBlogPost.image.fluid.src})`,
          }}
        />
        <div className="blogpost">
          <h1 className="blogpost__title">
            {props.data.contentfulBlogPost.title}
          </h1>
          <p className="blogpost__date">
            {props.data.contentfulBlogPost.createdAt}
          </p>
          <div
            className="blogpost__content"
            dangerouslySetInnerHTML={{
              __html: `${props.data.contentfulBlogPost.content.childMarkdownRemark.html}`,
            }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default blogPost
