exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = require.resolve(`./src/templates/postTemplate.js`)

    const result = await graphql(`
      {
        allStrapiPost(
          sort: { order: DESC, fields: [created_at] }
          limit: 1000
        ) {
          edges {
            node {
              id
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
      console.log('node!', node)
      createPage({
        path: `${node.id}`,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          id: node.id,
        },
      })
    })
  }
