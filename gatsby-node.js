const path = require(`path`)
var slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
    query ListPosts {
      posts {
        listPosts {
          items {
            id
            slug
          }
          nextToken
        }
      }
    } 
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.posts.listPosts.items

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.slug,
      component: blogPost,
      context: {
        id: post.id,
        slug: post.slug,
        previous,
        next
      },
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.typeName === `Posts` && node.internal.type === `GraphQLSource`) {
    const value = `slug_value`

    createNodeField({
      name: `slug`,
      node,
      value,
    })
    
  }
}
