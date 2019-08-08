import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this);
    const post = this.props.data.posts.getPost
    const { previous, next } = this.props.pageContext

    return (
      <Layout
        location={this.props.location}
        title={post.title}
        subtitle={post.excerpt}
        description={post.body || post.excerpt}
        fullsize="false"
      >
        <article className="article">
          <section className="section content">
            <div className="container">
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
              <hr />
            </div>
            <div className="container">
              <Bio />
              <nav
                className="pagination"
                role="navigation"
                aria-label="pagination"
              >
                {previous && (
                  <Link
                    className="pagination-previous"
                    to={previous.fields.slug}
                    rel="prev"
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
                {next && (
                  <Link
                    className="pagination-next"
                    to={next.fields.slug}
                    rel="next"
                  >
                    {next.frontmatter.title} →
                  </Link>
                )}
              </nav>
            </div>
          </section>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query getPost($id: ID!) { 
  posts {
    getPost(id: $id) {
      id
      author
      title
      body
      excerpt
      slug
      likes
      dislikes
      created
      modified
      blog {
        id
        title
        body
        created
        modified
        posts {
          nextToken
        }
        version
      }
      tags {
        items {
          id
          value
        }
        nextToken
      }
      comments {
        items {
          id
          author
          body
          likes
          dislikes
          created
          modified
          version
        }
        nextToken
      }
      version
    }
  }
}
`
