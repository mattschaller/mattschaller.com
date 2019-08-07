import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout
        location={this.props.location}
        title={post.frontmatter.title}
        subtitle="Welcome to posttown"
        description={post.frontmatter.description || post.excerpt}
        fullsize="false"
      >
        <article className="article">
          <section className="section content">
            <div className="container">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
