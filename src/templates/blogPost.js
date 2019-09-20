import React from "react"
import { graphql } from "gatsby"

import Header from "../components/Header"
import Layout from "../components/layout"

export const query = graphql`
query blogPost($id: String!) {
  contentfulBlogPost(id: {eq: $id}) {
    title
    id
    slug
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
    createdAt(locale: "en-GB", formatString: "D/M/Y")
  }
}
`

const blogPost = (props) => {
  console.log(props.data.contentfulBlogPost)
  return (
    <Layout>
      <Header />
      <div className="blogContainer">
        <div className="blogpost">
          <h1 className="blogpost__title">{props.data.contentfulBlogPost.title}</h1>
          <p className="blogpost__date">{props.data.contentfulBlogPost.createdAt}</p>
          <img src={props.data.contentfulBlogPost.image.fluid.src} alt="" />
          <p className="blogpost__content" dangerouslySetInnerHTML={
            {__html: `${props.data.contentfulBlogPost.content.childMarkdownRemark.html}`}
          }/>
        </div>
      </div>
    </Layout>
  )
}

export default blogPost
