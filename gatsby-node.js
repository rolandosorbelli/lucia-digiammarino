const path = require(`path`)

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`type category implements Node { id: ID! }`)
}

const makeRequest = ( graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result
    })
  )
})

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getBlog = makeRequest(graphql, `
    {
      allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`src/templates/blogPost.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  return Promise.all([
    getBlog
  ])
}
