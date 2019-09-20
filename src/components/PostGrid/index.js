import React from "react"
import { StaticQuery, graphql, navigate } from "gatsby"

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
          <div
            key={edge.node.id}
            className="postgrid__card"
            onClick={() => navigate(`/blog/${edge.node.slug}`)}
          >
            <img
              className="postgrid__image"
              src={edge.node.image.fluid.src}
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
        ))}
      </div>
    )}
  ></StaticQuery>
)

export default PostGrid
