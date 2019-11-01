import React, { useState } from "react"
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
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

const BlogPost = props => {
  // console.log(props.data.allContentfulBlogPost)
  let currentPostId = props.data.contentfulBlogPost.slug
  let allPosts = props.data.allContentfulBlogPost.edges
  let allSlugs = []
  Object.values(allPosts).filter(value =>
    allSlugs.push(value.node.slug, value.node.title)
  )
  console.log(allSlugs)
  let index = allSlugs.indexOf(currentPostId)
  let prevItem
  let prevTitle
  let nextItem
  let nextTitle
  if (index >= 0 && index < allSlugs.length - 1) {
    prevItem = allSlugs[index + 2]
    prevTitle = allSlugs[index + 3]
    nextItem = allSlugs[index - 2]
    nextTitle = allSlugs[index - 1]
  }
  console.log(prevItem, prevTitle, "PREV")
  console.log(nextItem, nextTitle, "NEXT")

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
          <div className="blogpost__promoWrapper">
            <div className="blogpost__promoPrev">
              {prevTitle !== undefined && <p>PREVIOUS</p>}
              <a href={`/blog/${prevItem}`}>{prevTitle}</a>
            </div>
            <div className="blogpost__promoNext">
              {nextTitle !== undefined && <p>NEXT</p>}
              <a href={`/blog/${nextItem}`}>{nextTitle}</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
