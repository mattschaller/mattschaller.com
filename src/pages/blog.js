import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const blogs = data.posts.listBlogs.items
    const articles = data.posts.listPosts.items
    console.log(this);
    return (
      <Layout
        location={this.props.location}
        title="Articles"
        subtitle="Stuff I have written"
        fullsize="false"
      >
        <section className="section">
          <div className="container">
            
            {articles.map((items) => {
              const title = items.title || items.id
              return (
                <article className="article content" key={items.id}>
                  <section className="section">
                    <h3>
                      <Link to={items.slug}>{title}</Link>
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: items.body || items.excerpt,
                      }}
                    />
                  </section>
                </article>
              )
            })}
            
            <hr/>

            {posts.map( ({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article className="article content" key={node.fields.slug}>
                  <section className="section">
                    <h3>
                      <Link to={`/blog/` + node.fields.slug}>{title}</Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </article>
              )
            })}
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  posts {
    listBlogs {
      items {
        id
        name
        version
        posts {
          items {
            id
          }
        }
      }
      nextToken
    }
    listPosts {
      items {
        id
        author
        title
        body
        excerpt
        slug
        likes
        dislikes
        version
        blog {
          id
        }
        comments {
          items {
            id
          }
        }
      }
      nextToken
    }
    listComments {
      items {
        id
        author
        body
        likes
        dislikes
        version
        post {
          id
        }
      }
      nextToken
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
}
`