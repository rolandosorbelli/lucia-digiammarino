import React from "react"
import { StaticQuery, graphql } from "gatsby"

const PostGrid = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulBlogPost(limit: 5, sort: {fields: createdAt, order: DESC}) {
          edges {
            node {
              id
              slug
              title
              createdAt(locale: "en_GB")
              shortSynopsis
              category {
                title
                slug
              }
              image {
                fluid(maxWidth: 1200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="postgrid__wrapper">
        {console.log(data)}
        {data.allContentfulBlogPost.edges.map(edge => (
          <div
            key={edge.node.id}
            className="postgrid__card">
            <img
              className="postgrid__image"
              src={edge.node.image.fluid.src}
            />
            <div className="postgrid__content">
              <h1>{edge.node.title}</h1>
              <p>{edge.node.shortSynopsis}</p>
              {edge.node.category.map(category => (
                <li key={category.id}>{category.title}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  ></StaticQuery>
)

export default PostGrid