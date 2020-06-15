const getPostPathFromNode = node => {
  return node.slug || node.id
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const postTemplate = require.resolve(`./src/templates/postTemplate.js`)

  const result = await graphql(`
    {
      allStrapiPost(sort: { order: DESC, fields: [createdAt] }, limit: 3000) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allStrapiPost.edges.forEach(({ node }) => {
    createPage({
      path: `post/${getPostPathFromNode(node)}`,
      component: postTemplate,
      context: {
        // additional data can be passed via context
        id: node.id,
      },
    })
  })
}
