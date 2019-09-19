exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`type category implements Node { id: ID! }`)
}
