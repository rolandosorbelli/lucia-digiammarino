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
                description
                fluid(maxWidth: 1200, maxHeight: 675, quality: 100) {
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
          <a
            href={`/blog/${edge.node.slug}`}
            className="postgrid__card"
            key={edge.node.id}
          >
            <div>
              <img
                className="postgrid__image"
                src={edge.node.image.fluid.src}
                alt={edge.node.image.description}
              />
              <div className="postgrid__content">
                <h1>{edge.node.title}</h1>
                <p>{edge.node.shortSynopsis}</p>
                <div>
                  {edge.node.category.map((category, index) => {
                    return <span key={index}>{ (index ? ', ' : '') + category.title }</span>
                  })}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    )}
  ></StaticQuery>
)

export default PostGrid
